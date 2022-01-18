import { OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

export interface IFormControl extends OnDestroy, OnInit {
    group: FormGroup;
  
    controlName: string;
  
    subscription: Subscription;
  
    placeholder: string;
  
    isTooltipRequired: boolean;

    errorMessage: string;

    errorLabel: string;

    required: boolean;  
  }
  