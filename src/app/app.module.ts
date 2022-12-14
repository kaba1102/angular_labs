import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainModule } from 'src/modules/main/main.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPageModule } from 'src/modules/auth-page/auth-page.module';
import { InfoModule } from 'src/modules/info/info.module';
import { NavbarModule } from 'src/modules/navbar/navbar.module';
import { JwtInterceptor } from './interceptors/jwt-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavbarModule,
    AuthPageModule,
    MainModule,
    InfoModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
