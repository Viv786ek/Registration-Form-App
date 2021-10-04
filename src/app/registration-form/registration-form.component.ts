import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';

class Review {
    
    
  private username: string;
  private name: string;
  private email: string;
  private password: string;
  private gender: string;
  private age: number;
  private mobileNumber: number;
  private address: string;
  

  constructor(  username: string, name: string,email: string,password: string,gender: string,age: number,mobileNumber: number,address: string) {
      

      this.username = username;
      this.name = name;
      this.email = email;
      this.password = password;
      this.gender = gender;
      this.age = age;
      this.mobileNumber = mobileNumber;
      this.address = address;

  } 
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  users:Review[]=[];
  isSubmitted=false;
  successMessage:string=""

  regForm!:FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      username: ['',[Validators.required]],
      name: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      password: ['',[Validators.required,Validators.pattern("[a-zA-Z@_]{6,}")]],
      gender: ['male',[Validators.required]],
      age: ['',[Validators.required,Validators.minLength(1),Validators.maxLength(3)]],
      mobileNumber: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]],
      address: ['',[Validators.required,Validators.maxLength(50),Validators.pattern("[a-zA-Z0-9/ -]{8,}")]]
      


    })
    let fetchData = (localStorage.getItem('users')) ;
    console.log(this.users);
    if(fetchData!=null){
      this.users = JSON.parse(fetchData)
    }
  }



userData:any;


  // get myForm(){
  //   return this.regForm.get('gender')
  // }

  register(){
    console.log(this.regForm.value)
    this.isSubmitted=true;
    this.successMessage="Sucessfully Register!..."
    // console.log(this.regForm)
    // this.users.push({
    //   name:string =this.username.value
    // });
    let customObj = new Review(this.regForm.value.username,this.regForm.value.name,this.regForm.value.email,this.regForm.value.password,this.regForm.value.gender,this.regForm.value.age,this.regForm.value.mobileNumber,this.regForm.value.address);
    this.users.push(customObj);
    console.log(this.users);
    localStorage.setItem("users",JSON.stringify(this.users))
    // const userData = localStorage.getItem('users')
    // console.log(userData);
  }



}


