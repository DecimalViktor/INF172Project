import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})

export class Tab4Page implements OnInit {
  oneGray = "chest1_gray.svg"
  oneStatus = 0;
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
  constructor() {
    
   }

  ngOnInit() {
  }
  
  
}
