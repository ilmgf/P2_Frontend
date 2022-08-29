import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart/cart.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegisterGuard } from './register.guard';
import { ConsolePageComponent } from './console-page/console-page.component';
import { ConsoleListComponent } from './console-list/console-list.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'cart', component: CartComponent, canActivate: [RegisterGuard]},
  {path:'', redirectTo:'/cart', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'register', component: RegisterComponent},
  {path:'', redirectTo:'/register', pathMatch:'full'},
  {path:'checkout', component: CheckoutComponent},
  {path:'', redirectTo:'/checkout', pathMatch:'full'},
  {path:'profile', component: UserProfileComponent,  canActivate: [RegisterGuard]},
  {path:'', redirectTo:'/profile', pathMatch:'full'},
  {path:'console/:ptitle', component:ConsolePageComponent},
  {path:'all-consoles', component:ConsoleListComponent}


];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
