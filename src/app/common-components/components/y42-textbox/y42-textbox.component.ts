import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ErrorMessageService } from '../../services';
import { IFormControl } from '../form-conntrol.interface';

@Component({
  selector: 'y42-textbox',
  templateUrl: './y42-textbox.component.html',
  styleUrls: ['./y42-textbox.component.css']
})
export class Y42TextboxComponent implements IFormControl {

  
  
  @Input() group: FormGroup;
  @Input() controlName: string;
  @Input() subscription: Subscription;
  @Input() placeholder: string;
  @Input() isTooltipRequired: boolean;
  @Input() errorMessage: string;
  @Input() required: boolean;
  @Input() errorLabel: string
  @Input() type: "text" | "password" | "number" | "date" | "checkbox" | "email" = "text";
 

  
  constructor(private errorMessageService: ErrorMessageService) {   

  }
  
  ngOnDestroy(): void {
    
  }

 

  ngOnInit(): void {
    const control = this.group.get(this.controlName);
    const subscribe = control.valueChanges.pipe(debounceTime(1000))
    .subscribe(_ => this.errorMessage =  this.errorMessageService.setMessage<IFormControl, "errorLabel">
    (this.group.get(this.controlName), this, "errorLabel"));
    this.subscription.add(subscribe);
  }

}
