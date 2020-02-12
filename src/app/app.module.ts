import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PegarLetraComponent } from './pegar-letra/pegar-letra.component';
import { ExibirLetraComponent } from './exibir-letra/exibir-letra.component';
import { ServicejogoService } from './palavras/servicejogo.service';

@NgModule({
  declarations: [
    AppComponent,
    PegarLetraComponent,
    ExibirLetraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicejogoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
