// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// // import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {  MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
// import { RouterModule } from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
// import { MatTableModule } from '@angular/material/table';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSidenavContainer } from '@angular/material/sidenav'; 


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav'; // Importez seulement MatSidenavModule, pas MatSidenavContainer
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListClientComponent } from './list-client/list-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { DetailsClientComponent } from './details-client/details-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatPaginatorModule, MatSelectModule } from '@angular/material';
import { ListSalonComponent } from './list-salon/list-salon.component';
import { AddSalonComponent } from './add-salon/add-salon.component';
import { DetailsSalonComponent } from './details-salon/details-salon.component';
import { UpdateSalonComponent } from './update-salon/update-salon.component';
import { ListCoiffeurComponent } from './coiffeur/list-coiffeur/list-coiffeur.component';
import { AddCoiffeurComponent } from './coiffeur/add-coiffeur/add-coiffeur.component';
import { DetailsCoiffeurComponent } from './coiffeur/details-coiffeur/details-coiffeur.component';
import { UpdateCoiffeurComponent } from './coiffeur/update-coiffeur/update-coiffeur.component';
import { ListProprietaireComponent } from './proprietaire/list-proprietaire/list-proprietaire.component';
import { AddProprietaireComponent } from './proprietaire/add-proprietaire/add-proprietaire.component';
import { UpdateProprietaireComponent } from './proprietaire/update-proprietaire/update-proprietaire.component';
import { DetailsProprietaireComponent } from './proprietaire/details-proprietaire/details-proprietaire.component';
import { ListServiceClassComponent } from './serviceClass/list-service-class/list-service-class.component';
import { AddServiceClassComponent } from './serviceClass/add-service-class/add-service-class.component';
import { UpdateServiceClassComponent } from './serviceClass/update-service-class/update-service-class.component';
import { DetailsServiceClassComponent } from './serviceClass/details-service-class/details-service-class.component';

@NgModule({
  declarations: [
    AppComponent,
    ListClientComponent,
    AddClientComponent,
    DetailsClientComponent,
    UpdateClientComponent,
    ListSalonComponent,
    AddSalonComponent,
    DetailsSalonComponent,
    UpdateSalonComponent,
    ListCoiffeurComponent,
    AddCoiffeurComponent,
    DetailsCoiffeurComponent,
    UpdateCoiffeurComponent,
    ListProprietaireComponent,
    AddProprietaireComponent,
    UpdateProprietaireComponent,
    DetailsProprietaireComponent,
    ListServiceClassComponent,
    AddServiceClassComponent,
    UpdateServiceClassComponent,
    DetailsServiceClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    // MatSidenavContainer,
    MatToolbarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // MatSidenavContent,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
