import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { PaginaTablaComponent } from './pages/pagina-tabla/pagina-tabla.component';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoadingComponent,
    PaginaTablaComponent,
    MenuHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    PanelModule,
    TabMenuModule,
    MenubarModule,
    ToastModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
