import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";
import {Router, ActivatedRoute, Params} from "@angular/router";



@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
    id;
    productName;
    productDescription;
    zipcode;
    productImage;

  constructor(
      private firebaseService: FirebaseService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.id = this.route.snapshot.params['id'];

      this.firebaseService.getProductDetails(this.id).subscribe(product => {
          this.productName = product.productName;
          this.productDescription = product.productDescription;
          this.zipcode = product.zipcode;
      })
  }

  onEditSubmit(){
      let product = {
          productName: this.productName,
          productDescription: this.productDescription,
          zipcode: this.zipcode
      }

      this.firebaseService.updateProduct(this.id, product);
      this.router.navigate(["/product/"+this.id])
  }
  
    onDeleteClick(){
        this.firebaseService.deleteProduct(this.id);
        this.router.navigate(["/products"])
    }


}
