import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})

export class Tab4Page implements OnInit {
  oneGray = "chest1_gray.svg"
  oneStatus = 0;
  twoGray = "chest2_gray.svg"
  twoStatus = 0;
  thrGray = "chest3_gray.svg"
  thrStatus = 0;
  fouGray = "chest4_gray.svg"
  fouStatus = 0;
  fivGray = "chest5_gray.svg"
  fivStatus = 0;
  sixGray = "chest6_gray.svg"
  sixStatus = 0;
  sevGray = "chest7_gray.svg"
  sevStatus = 0;
  oneClick(){
    
    if(this.oneGray.includes("gray")){
      this.oneGray="chest1.svg"
      this.oneStatus = 1
    }
    else{
      this.oneGray="chest1_gray.svg"
      this.oneStatus= 0 ;
    }

  }
  twoClick(){
    if(this.twoGray.includes("gray")){
      this.twoGray="chest2.svg"
      this.twoStatus = 1
    }
    else{
      this.twoGray="chest2_gray.svg"
      this.twoStatus= 0 ;
    }
  }
  thrClick(){
    if(this.thrGray.includes("gray")){
      this.thrGray="chest3.svg"
      this.thrStatus = 1
    }
    else{
      this.thrGray="chest3_gray.svg"
      this.thrStatus= 0 ;
    }
  }

  fouClick(){
    if(this.fouGray.includes("gray")){
      this.fouGray="chest4.svg"
      this.fouStatus = 1
    }
    else{
      this.fouGray="chest4_gray.svg"
      this.fouStatus= 0 ;
    }
  }

  fivClick(){
    if(this.fivGray.includes("gray")){
      this.fivGray="chest5.svg"
      this.fivStatus = 1
    }
    else{
      this.fivGray="chest5_gray.svg"
      this.fivStatus= 0 ;
    }
  }
  sixClick(){
    if(this.sixGray.includes("gray")){
      this.sixGray="chest6.svg"
      this.sixStatus = 1
    }
    else{
      this.sixGray="chest6_gray.svg"
      this.sixStatus= 0 ;
    }
  }
  sevClick(){
    if(this.sevGray.includes("gray")){
      this.sevGray="chest7.svg"
      this.sevStatus = 1
    }
    else{
      this.sevGray="chest7_gray.svg"
      this.sevStatus= 0 ;
    }
  }

  constructor() {
    
   }

  ngOnInit() {
  }
  
  
}
