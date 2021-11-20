import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  registerForm?: FormGroup;
  title = 'reactive-forms';

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(){
    this.registerForm = this.formBuilder.group(
      {
        firstName: [],
        lastName : [],
        email : [],
        password: [],
        confirmPassword: [],
        acceptTerms:[]
      }
    )
  }
}
