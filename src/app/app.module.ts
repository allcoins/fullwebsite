import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoticiasComponent } from './noticias/noticias.component';
import { EventosComponent } from './eventos/eventos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HorariosComponent } from './horarios/horarios.component';
import { ContactosComponent } from './contactos/contactos.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NoticiasService } from './noticias.service';
import { FileUploadService } from './file-upload.service';
import { PublicarComponent } from './publicar/publicar.component';
import { FileUploadModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NoticiasComponent,
    EventosComponent,
    GaleriaComponent,
    HorariosComponent,
    ContactosComponent,
    LoginComponent,
    PublicarComponent
  ],
  imports: [
     BrowserModule,
     HttpClientModule,
     FileUploadModule,
     NgbModule.forRoot(),
     RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'horarios',
        component: HorariosComponent
      },
      {
        path: 'noticias',
        component: NoticiasComponent
      },
      {
        path: 'galeria',
        component: GaleriaComponent
      },
      {
        path: 'contactos',
        component: ContactosComponent
      },
      {
        path: 'eventos',
        component: EventosComponent
      },
      {
        path: 'publicar',
        component: PublicarComponent
      }
    ])
  ],
  providers: [NoticiasService, FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
