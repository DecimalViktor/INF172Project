import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  selectGender; // return male/ female
  dateOfBirth; // reuturn time object of selection
  FirstName;
  MiddleName;
  LastName;

  constructor() {}
  ngOninit(){}
  getGender(){
    console.log(this.selectGender)
  }
  getDOB(){
    console.log(this.dateOfBirth)
  }
  getLoginData(){
    
  }
  nextButton(){

  }
  }
