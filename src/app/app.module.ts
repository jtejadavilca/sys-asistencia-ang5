import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modules
import { PagesModule } from './pages/pages.module';

// Componentes
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
