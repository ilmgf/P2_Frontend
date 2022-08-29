import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from './carousel/carousel.module';
import { CartComponent } from './cart/cart/cart.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ConsolePageComponent } from './console-page/console-page.component';
import { ConsoleListComponent } from './console-list/console-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    UserProfileComponent,
    ConsolePageComponent,
    ConsoleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
