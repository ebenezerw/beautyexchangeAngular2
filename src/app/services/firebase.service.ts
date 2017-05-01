import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from "firebase"
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class FirebaseService {
  products: FirebaseListObservable<any[]>;
  product: FirebaseObjectObservable<any>;
  folder: any;

  constructor(private af: AngularFire) {
      this.folder = "productimages"
      this.products = this.af.database.list('/products') as FirebaseListObservable<Product[]>
   }

  getProducts(){
    return this.products;
  }

  getProductDetails(id){
    this.product = this.af.database.object('/products/'+id) as FirebaseObjectObservable<Product>
    return this.product;
  }

  addProduct(product){
      //Create root ref for file upload
      let storageRef = firebase.storage().ref();
      for(let selectedFile of [(<HTMLInputElement>document.getElementById('productImage')).files[0]]){
          let path = `/${this.folder}/${selectedFile.name}`;
          let iRef = storageRef.child(path);
          iRef.put(selectedFile).then((snapshot) => {
              product.productImage = selectedFile.name;
              product.path = path;
              return this.products.push(product)
          })
      }
  }

  updateProduct(id,product){
      return this.products.update(id, product)
  }

  deleteProduct(id){
      return this.products.remove(id)
  }

  getProductsByName(productName: any): Observable<Product[]> {
    return this.af.database.list('products')
    .map(_products => _products.filter(product => product.productName.toLowerCase().indexOf(productName) !== -1));

  }

}


interface Product{
    $key?: string;
    productName: string;
    productDescription: string;
    productImage: string;
    zipcode: string;
}
