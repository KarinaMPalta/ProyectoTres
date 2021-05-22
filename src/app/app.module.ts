import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeatherComponent } from './heather/heather.component';
import { HomeComponent } from './home/home.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarNotaComponent } from './editar-nota/editar-nota.component';

@NgModule({
  declarations: [
    AppComponent,
    HeatherComponent,
    HomeComponent,
    AdicionarComponent,
    EditarNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
