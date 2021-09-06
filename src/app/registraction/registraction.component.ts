import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registraction',
  templateUrl: './registraction.component.html',
  styleUrls: ['./registraction.component.css']
})
export class RegistractionComponent implements OnInit {
  registration:FormGroup;


  constructor(private fb:FormBuilder) {
    public registrationFormGroup(){
    this.registration=this.fb.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    email:['',[Validators.required]],
    mobileNo:['',[Validators.required]]
})
  }

 public getFirstName(){

   return this.registration.get('firstName');
 }

 public getLastName(){

   return this.registration.get('lastName');
 }
 public getEmail(){

   return this.registration.get('email');
 }

 public getMobileNo(){

   return this.registration.get('mobileNo');
 }
 }

  ngOnInit(): void {
    this.registrationFormGroup();
  }

  onRegister(){
    
    console.log(this.registration.value);
  }


}
