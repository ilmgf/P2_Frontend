import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart/cart.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  {path:'cart', component: CartComponent},
  {path:'', redirectTo:'/cart', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'register', component: RegisterComponent},
  {path:'', redirectTo:'/register', pathMatch:'full'},
  {path:'checkout', component: CheckoutComponent},
  {path:'', redirectTo:'/checkout', pathMatch:'full'},
  {path:'profile', component: UserProfileComponent},
  {path:'', redirectTo:'/profile', pathMatch:'full'}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
