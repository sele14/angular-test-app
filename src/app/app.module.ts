import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoolComponentComponent } from './cool-component/cool-component.component';
import { UsersListModule } from './userslist/userslist.module';

@NgModule({
  declarations: [
    AppComponent,
    CoolComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
