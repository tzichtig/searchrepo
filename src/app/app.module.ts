import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
