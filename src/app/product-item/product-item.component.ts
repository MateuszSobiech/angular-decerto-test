import { Component, Input, OnInit } from '@angular/core';
import { ProductDto } from 'src/dto/product-dto';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: ProductDto = new ProductDto();

  constructor() {}

  ngOnInit(): void {}
}
