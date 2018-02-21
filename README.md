# Angular Smart Table Component

## Before using
### Deprecated
This fork of `ng2-smart-table` will not be maintained anymore.

Now I'm working on `angular4-material-table` that is built on `@angular/cdk` tables, which is whitebox and fully configurable for any needs.

[Check it.](https://www.npmjs.com/package/angular4-material-table)

## If you want use ng2-smart-table-custom anyways...

This is a customization of ng2-smart-table package created by [Akveo team](https://akveo.github.io/ng2-smart-table/), adding support for field inline validation.

About this package:

Adds support for field validation using Angular validation structures for that purpose: FormGroup and FormControl, providing validation with confirmSave/confirmCreate and without it.

To specify the validation for the fields, a custom instance of ValidatorService must be implemented and provided in the component that instanciate the table.

Events emitted by confirmEmitter in case of confirmSave and confirmCreate contain the FormGroup (or the extension defined in ValidatorService's implementation) that validates the row. There can be checked the fields with errors, display custom messages inline, etc.

To extend the validation, it can be done in multiple ways:
-Providing DefaultEditor extensions that show messages depending on FormControl.error values.
-Validating table input with extensions of FormGroup and FormControl classes, and invoke custom actions with them in case that error happens (this can be implemented only with confirmSave/confirmCreate).

Data: https://github.com/akveo/ng2-smart-table/pull/455

