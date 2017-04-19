import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../services/firebase.service"
import {Router, ActivatedRoute, Params} from "@angular/router"
import * as firebase from "firebase"

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    id: any;
    product: any;
    imageUrl: any;

    constructor(
        private firebaseService: FirebaseService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

  ngOnInit() {
      this.id = this.route.snapshot.params['id'];

      this.firebaseService.getProductDetails(this.id).subscribe(product => {
          this.product = product;
          console.log(product)

          let storageRef = firebase.storage().ref();
          let spaceRef = storageRef.child(product.path);
          storageRef.child(product.path).getDownloadURL().then((url) => {
              this.imageUrl = url;
          }).catch((error) => {
              console.log(error)
          })
      })
  }

}
