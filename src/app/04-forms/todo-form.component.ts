
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

export class TodoFormComponent { 
  form: FormGroup; 

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: [''],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }
}