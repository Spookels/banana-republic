import { Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MembershipModel } from './models/membership.model';
import { RegisterModel } from './models/registration.model';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'banana-republic';
  isClicked: boolean = false;
  male: boolean = false;
  female: boolean = false;

  model: RegisterModel = new RegisterModel();
  membership: MembershipModel = new MembershipModel();

  


  toggle(){
    if(this.isClicked == false){
      this.isClicked = true;
    }else{
      this.isClicked = false;
    }
  }

  onClear(){
    this.model = new RegisterModel();
  }

  checkMale(){
    if(this.male == false){
      this.male = true;
      this.female = false
    }else{
      this.male = false;
    }
  }

  checkFemale(){
    if(this.female == false){
      this.female = true;
      this.male = false
    }else{
      this.female = false;
    }
  }

  checkMembership(membership: string){
    switch(membership){
      case 'classic': {
        if(this.membership.classic)
          this.membership.classic = false;
        else
          this.membership.classic = true;
        this.membership.silver = false;
        this.membership.gold = false;
        break;
      }
      case 'silver': {
        if(this.membership.silver)
          this.membership.silver = false;
        else
          this.membership.silver = true;
        this.membership.classic = false;
        this.membership.gold = false;
        break;
      }
      case 'gold': {
        if(this.membership.gold)
          this.membership.gold = false;
        else
          this.membership.gold = true;
        this.membership.silver = false;
        this.membership.classic = false;
        break;
      }
    }
  }
  

}
