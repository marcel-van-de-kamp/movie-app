import { Directive, Input, OnInit } from '@angular/core';
import { Validator, ValidationErrors, AbstractControl, NG_VALIDATORS } from '@angular/forms';

import { ratingValidator } from './rating-validator';

@Directive({
  selector: '[cwRatingValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RatingValidatorDirective, multi: true }]
})
export class RatingValidatorDirective implements Validator, OnInit {
  @Input() ratingMin: number;
  @Input() ratingMax: number;

  private validator;

  constructor() {

   }

  ngOnInit(){
    this.validator = ratingValidator(+this.ratingMin, +this.ratingMax);
  }

  validate(c: AbstractControl): { [key: string]: any; } {
    return this.validator(c);
  }
}
