import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import {RouterModule, Routes} from "@angular/router"
import { AngularFireModule, AuthProviders, AuthMethods } from "angularfire2"
import {FirebaseService} from "./services/firebase.service"
import {FlashMessagesModule} from "angular2-flash-messages"

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

export const firebaseConfig = {
    apiKey: "AIzaSyAfleMBDm0nWzQM3eyoD5svEptE79_IutE",
    authDomain: "beautyexchange-68a5f.firebaseapp.com",
    databaseURL: "https://beautyexchange-68a5f.firebaseio.com",
    projectId: "beautyexchange-68a5f",
    storageBucket: "beautyexchange-68a5f.appspot.com",
    messagingSenderId: "201920609071"
};

const firebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Popup
};

const appRoutes: Routes = [
    {path: "", component:HomeComponent},
    {path: "products", component:ProductsComponent},
    {path: "product/:id", component:ProductComponent},
    {path: "add-product", component:AddProductComponent},
    {path: "edit-product/:id", component:EditProductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NavbarComponent,
    ProductComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
