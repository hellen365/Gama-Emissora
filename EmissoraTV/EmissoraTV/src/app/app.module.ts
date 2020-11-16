import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { TelaInicialComponent } from './views/home/tela-inicial/tela-inicial.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/Login/login/login.component';
import { ReservaComponent } from './views/views-Admin/reserva/reserva.component';
import { CadastrarComponent } from './views/views-Admin/cadastrar/cadastrar.component';
import { ContratacaoComponent } from './views/views-Admin/contratacao/contratacao.component';
import { MinhasContratacaoComponent } from './views/views-Ator/minhas-contratacao/minhas-contratacao.component';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    LoginComponent,
    ReservaComponent,
    CadastrarComponent,
    ContratacaoComponent,
    MinhasContratacaoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatTabsModule,
    MatTableModule,
    CommonModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
