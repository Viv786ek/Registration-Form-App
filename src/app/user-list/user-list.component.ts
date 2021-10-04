
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
class Review {
    
    
  public username: string;
  public name: string;
  public email: string;
  public password: string;
  public gender: string;
  public age: number;
  public mobileNumber: number;
  public address: string;
  

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
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
 userData:Review[]=[];
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    // this.commonService.getList();
    // this.userData = JSON.parse(localStorage.getItem('users'));
    // this.userData = localStorage.getItem('users')
    
    let fetchData = (localStorage.getItem('users')) ;
    console.log(this.userData);
    if(fetchData!=null){
      this.userData = JSON.parse(fetchData)
    }


  }

}
