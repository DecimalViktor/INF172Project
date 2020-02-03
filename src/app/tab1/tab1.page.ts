import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  selectGender;
  dateOfBirth;
  FirstName;
  constructor() {}
  ngOninit(){}
  getGender(){
    console.log(this.selectGender)
  }
  getDOB(){
    console.log(this.dateOfBirth)
  }
  }
