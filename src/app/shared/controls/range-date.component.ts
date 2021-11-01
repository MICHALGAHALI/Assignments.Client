
import { Component, forwardRef, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { dateGroup } from './date-group/date-group';


@Component({
  selector: 'app-range-dates',
  templateUrl: './range-date.component.html',
  styleUrls: ['./range-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeDateComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RangeDateComponent),
      multi: true
    }
  ]
})
export class RangeDateComponent implements OnInit, ControlValueAccessor, Validator {

  public _changeCb: any;
  touchCallback: any;

  rangeDates: FormGroup;


  constructor() {
    this.rangeDates = new FormGroup({
      StartDate: new FormControl('', [Validators.required]),
      FinishDate: new FormControl(''),
    })
  }
  validate(control: AbstractControl): ValidationErrors | null {
    return this.rangeDates.valid ? null : { invalidForm: { valid: false, message: "rangeDates fields are invalid" } };
  }

  ngOnInit() {
    this.rangeDates.valueChanges.subscribe((data) => {
      if (this._changeCb) {
        this._changeCb(data);
      }
    });
  }
  writeValue(obj: { StartDate: string, FinishDate: string }): void {
    this.rangeDates.setValue(obj || { StartDate: '', FinishDate: '' });
  }

  registerOnChange(fn: any): void {
    if (fn)
      this._changeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.touchCallback = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.rangeDates.disable() : this.rangeDates.enable();
  }


}