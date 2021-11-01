import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { dateGroup } from "./date-group";

@Directive({
    selector:'[daterange]',
    providers:[
    {
        provide: NG_VALIDATORS,
        useExisting: dateGroupDirective,
        multi: true
    }]
})
export class dateGroupDirective implements Validator{

    validate(control: AbstractControl): ValidationErrors | null {
        return dateGroup(control)
    }

}