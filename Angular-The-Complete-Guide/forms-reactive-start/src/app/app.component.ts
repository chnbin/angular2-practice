import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Admin', 'test'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      // Group username and email into userdata
      'userdata': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onNgSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    // Explicit cast or error
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // Return a javascript object: key is string type; value is boolean type.
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      // This will be stored in username's error object.
      return {'nameIsForbidden': true};
    }

    // This is very important, if validation is successful you have to return null or nothing.
    return null;
  }
}
