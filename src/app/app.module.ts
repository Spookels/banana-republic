import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
