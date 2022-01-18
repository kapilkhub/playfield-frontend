import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Y42TextboxComponent } from './components';
import { ErrorMessageService } from './services';
import { ReactiveFormsModule } from '@angular/forms';



const Components = [Y42TextboxComponent]

@NgModule({
  declarations: [...Components],
  exports: [...Components],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[
    ErrorMessageService
  ]
})
export class CommonComponentsModule { }
