import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { homescreenComponent } from './homescreen/homescreen.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { LoadingService } from './loading.service';

@NgModule({
  declarations: [
    AppComponent,
    homescreenComponent,
    SidebarComponent,
    NavbarComponent,
    LoadingIndicatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
