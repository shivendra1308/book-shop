import { NgModule } from '@angular/core';
import { CartRoutingModule } from './cart-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ]
})
export class CartModule { }
