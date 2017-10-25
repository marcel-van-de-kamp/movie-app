import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function ratingValidator(minVal: number, maxVal:Number): ValidatorFn {
  return function (control: AbstractControl): ValidationErrors {
    let value = control.value;
    debugger;
    if (value < minVal || value > maxVal) {
      return {
        validateRating: true
      }
    }

    return null;
  };
}