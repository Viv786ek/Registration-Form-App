import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  flag:boolean = true
  flag2:boolean=true
  flag3:boolean=true
  

  apply(value:string){
    // this.flag = value == 'home'?true : false; 
    if(value=='home'){
      this.flag = true;
    }
    else if(value=='registration-form'){
      this.flag2=true;
    }
    else{
      this.flag3=true;
    }
  }
}
