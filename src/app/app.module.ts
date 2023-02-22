import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponentComponent } from './product-detail-component/product-detail-component.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DrivenFormCompComponent } from './driven-form-comp/driven-form-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OffresEmploiComponentComponent,
    ArticlesComponentComponent,
    NavBarComponent,
    NotFoundComponent,
    HomeComponent,
    ProductDetailComponentComponent,
    AddProductComponent,
    DrivenFormCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
