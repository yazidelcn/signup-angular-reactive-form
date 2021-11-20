import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passworCheker } from './validators/password-checker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  registerForm?: FormGroup;
  title = 'reactive-forms';
  submit: boolean = false;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(){
    this.registerForm = this.formBuilder.group(
      {
        firstName: ["", Validators.required],
        lastName : ["", Validators.required],
        email : ["", Validators.required, Validators.email],
        password: ["", Validators.required],
        confirmPassword: ["", Validators.required],
        acceptTerms:["", Validators.required]
      },{Validators : passworCheker('password','confirmPassword')}
    )
  }

  onSubmit(){
    this.submit = true;
    if(this.registerForm?.invalid){
      return;
    }

    console.table(this.registerForm?.value);
    console.table(this.registerForm)
  }

  onReset(){
    this.submit=false;
    this.registerForm?.reset();
  }

}
