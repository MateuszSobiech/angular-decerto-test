import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-bar',
  templateUrl: './products-bar.component.html',
  styleUrls: ['./products-bar.component.scss'],
})
export class ProductsBarComponent implements OnInit {
  @Output() toggleEmiter = new EventEmitter();
  isToggle: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleClass() {
    this.isToggle = !this.isToggle;
    this.toggleEmiter.emit(this.isToggle);
  }
}
