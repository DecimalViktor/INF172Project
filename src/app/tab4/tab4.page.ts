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
  constructor() {
    
   }

  ngOnInit() {
  }
  
  
}
