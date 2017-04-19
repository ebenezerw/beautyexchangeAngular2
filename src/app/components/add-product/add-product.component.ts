import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../services/firebase.service"
import {Router} from "@angular/router"

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
    productName: any;
    productDescription: any;
    zipcode: any;
    productImage: any;

  constructor(
      private firebaseService: FirebaseService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
      let product = {
          productName: this.productName,
          productDescription: this.productDescription,
          zipcode: this.zipcode
      }

      this.firebaseService.addProduct(product);

      this.router.navigate(["products"])
  }

}
