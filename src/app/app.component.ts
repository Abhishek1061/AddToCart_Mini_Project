import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent  } from './cart/cart.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartComponent,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AddToCart_MiniProject';

  cart: any[] = [];

  addProductsToCart(products: any[]) {
    this.cart = products;
  }

  

  
}
