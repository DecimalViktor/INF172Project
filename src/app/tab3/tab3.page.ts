import { Component, ViewChild } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { NavController } from "ionic-angular";
import { Tab1Page } from "../tab1/tab1.page";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page {
  constructor(public alertCtrl: AlertController) {}
  selectMed;

  getMed() {}

  async submitForm() {
    const alert = await this.alertCtrl.create({
      header: "Form Submitted",
      //subHeader: "SubTitle",
      message: "Your form is successfully submitted",
      buttons: ["OK"]
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
    //this.nav.push(Tab1Page);
  }
}
