import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { InputDateComponent } from './input-date/input-date.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    RegisterFormComponent,
    InputDateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
