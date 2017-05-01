import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2"
import {FlashMessagesService} from "angular2-flash-messages"
import {Router} from "@angular/router"
import {FirebaseService} from "../../services/firebase.service"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    products:any;

  constructor(
      private firebaseService: FirebaseService,
      public af:AngularFire,
      public flashMessage: FlashMessagesService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  login(){
      this.af.auth.login()
      this.flashMessage.show("You are logged in!", {cssClass: "alert-success", timeout: 3000})
  }

  logout(){
      this.af.auth.logout()
      this.flashMessage.show("You are logged out", {cssClass: "alert-warning", timeout: 3000})

       this.router.navigate(["/"])
  }


}
