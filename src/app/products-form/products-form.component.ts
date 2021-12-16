import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { db } from 'src/db';
import { ProductDto } from 'src/dto/product-dto';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss'],
})
export class ProductsFormComponent implements OnInit {
  productsForm!: FormGroup;
  products: Array<ProductDto> = new Array<ProductDto>();

  constructor(private formBuilder: FormBuilder) {
    this.productsForm = this.formBuilder.group({
      product: '',
    });
  }

  ngOnInit(): void {
    this.products = db;
  }
}
