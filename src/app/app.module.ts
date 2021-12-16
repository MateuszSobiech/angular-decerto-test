import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectProductComponent } from './select-product/select-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsBarComponent } from './products-bar/products-bar.component';
import { ProductsFormComponent } from './products-form/products-form.component';

@NgModule({
  declarations: [AppComponent, SelectProductComponent, ProductItemComponent, ProductsBarComponent, ProductsFormComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
