import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl} from '@angular/platform-browser';

export type SecurityTrustType = 'html'|'style'|'script'|'url'|'resourceUrl'|'none';

@Pipe({
    name: 'bypassSecurityTrust',
    standalone: false
})
export class BypassSecurityTrustPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}

  public transform(value: string, type: SecurityTrustType): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      case 'none': return value;
    }
  }
}
