import * as ts from 'typescript';
import * as path from 'path';
import * as chalk from 'chalk';

/** Compiles a TypeScript project with possible extra options. */
export function compileProject(project: string, options: ts.CompilerOptions) {
  const parsed = parseProjectConfig(project, options);
  const program = ts.createProgram(parsed.fileNames, parsed.options);
  const baseDir = program.getCurrentDirectory();

  // Report any invalid TypeScript options for the project.
  reportDiagnostics(program.getOptionsDiagnostics(), baseDir);

  const emitResult = program.emit();

  reportDiagnostics(emitResult.diagnostics, baseDir);
}

/** Parses a TypeScript project configuration. */
function parseProjectConfig(project: string, options: ts.CompilerOptions) {
  const config = ts.readConfigFile(project, ts.sys.readFile).config;
  const basePath = path.dirname(project);

  const host = {
    useCaseSensitiveFileNames: true,
    fileExists: ts.sys.fileExists,
    readDirectory: ts.sys.readDirectory,
    readFile: ts.sys.readFile,
  };

  return ts.parseJsonConfigFileContent(config, host, basePath, options);
}

/** Formats the TypeScript diagnostics into a error string. */
export function formatDiagnostics(diagnostics: ts.Diagnostic[], baseDir: string): string {
  return diagnostics.map(diagnostic => {
    let res = `• ${chalk.red(`TS${diagnostic.code}`)} - `;

    if (diagnostic.file) {
      const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
      const filePath = path.relative(baseDir, diagnostic.file.fileName);

      res += `${filePath}(${line + 1},${character + 1}): `;
    }
    res += `${ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')}`;

    return res;
  }).join('\n');
}

/** Checks and reports diagnostics if present. */
export function reportDiagnostics(diagnostics: ts.Diagnostic[], baseDir?: string) {
  if (diagnostics && diagnostics.length && diagnostics[0]) {
    console.error(formatDiagnostics(diagnostics, baseDir));
    throw new Error('TypeScript compilation failed.');
  }
}
