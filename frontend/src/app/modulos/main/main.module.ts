import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MainComponent} from './main.component'
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from 'src/app/genericos/menu/menu.component';
import { PieComponent } from 'src/app/genericos/pie/pie.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    MenuComponent,
    PieComponent
  ],
  imports: [
    //MaterialModule,
    MainRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
})
export class MainModule { }