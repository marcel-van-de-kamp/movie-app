import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function ratingValidator(minVal: number, maxVal:Number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    let value = control.value;

    if (value < minVal || value > maxVal) {
      return {
        validateRating: true
      }
    }

    return null;
  };
}