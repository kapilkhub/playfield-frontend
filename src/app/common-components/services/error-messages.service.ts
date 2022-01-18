import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { IFormControl } from '../components/form-conntrol.interface';

@Injectable()
export class ErrorMessageService {

    private errorMessage: string;
    constructor() { }
    
    ValidationMessages: {
        required: "Required field.",
        minlength: "Minimum characters required. ",
        maxlength: "Maximum characters exceeded. ",
        email: "Enter valid email. ",
        match: "Does not match. "
    }

    setMessage<T, key extends keyof T>(control: AbstractControl, obj: T, prop: key ): string {
       
        this.errorMessage = "";       
        if ((control.dirty || control.touched) && control.errors) {         
            this.errorMessage = Object.keys(control.errors).map(
              key => this.ValidationMessages[key]).join(" ");
          
        }
        return this.errorMessage + " " + obj[prop];
      }

      
}