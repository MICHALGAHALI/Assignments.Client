import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

export const dateGroup: ValidatorFn = (control: AbstractControl) => {
    let errors=null;
    if(control instanceof FormGroup) 
    {
        if(control instanceof FormGroup) 
        {
           let StartDate= control.get('StartDate')?.value;
           let FinishDate= control.get('FinishDate')?.value;
           if ((StartDate !== null && FinishDate !== null&&StartDate !== "" && FinishDate !== "") && StartDate > FinishDate) {
            return {'dateRenge': true};
        }
        }
    }
    return errors;
  }