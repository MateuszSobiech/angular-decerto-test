import { Component, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ProductDto } from 'src/dto/product-dto';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectProductComponent),
      multi: true,
    },
  ],
})
export class SelectProductComponent implements OnInit {
  @Input() products: Array<ProductDto> = new Array<ProductDto>();
  selectedProduct: ProductDto = new ProductDto();
  isToggle: boolean = true;
  onChange: any = () => {};

  ngOnInit(): void {}

  constructor() {}
  writeValue(obj: any): void {
    this.selectedProduct = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {}

  setProduct(product: ProductDto): void {
    this.selectedProduct = product;
    this.onChange(product);
    console.log(this.selectedProduct);
  }

  setCheckedClass(product: ProductDto): string {
    return this.selectedProduct.id === product.id ? 'checked' : '';
  }

  getToggle(event: any): void {
    this.isToggle = event;
  }
}
