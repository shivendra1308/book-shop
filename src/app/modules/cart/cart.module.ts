import { NgModule } from '@angular/core';
import { CartRoutingModule } from './cart-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CartRowComponent } from './components/cart-row/cart-row.component';
import { CartComponent } from './pages/cart/cart.component';



@NgModule({
  declarations: [CartComponent, CartRowComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ]
})
export class CartModule { }
