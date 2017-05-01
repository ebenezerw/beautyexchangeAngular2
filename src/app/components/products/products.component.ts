import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../services/firebase.service"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products: any;
    search: any;

    constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
      this.firebaseService.getProducts().subscribe(products => {
          this.products = products
      })
  }


    searchProds(){
      this.firebaseService.getProductsByName(this.search.toLowerCase()).subscribe(products => {
        this.products = products;
      });
    }

}
