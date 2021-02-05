import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  title = 'ng-workshop-forms';

  titleField = new FormControl('valor inicial', [Validators.required, Validators.minLength(3), Validators.pattern('')]);

}
