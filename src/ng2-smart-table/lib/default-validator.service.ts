import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidatorService } from './validator.service';

@Injectable()
export class DefaultValidatorService implements ValidatorService {
    getFormGroup(): FormGroup {
        return new FormGroup({});

    }
}