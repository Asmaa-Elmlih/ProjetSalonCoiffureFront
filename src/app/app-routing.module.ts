import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListClientComponent } from './list-client/list-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { DetailsClientComponent } from './details-client/details-client.component';
import { ListCoiffeurComponent } from './coiffeur/list-coiffeur/list-coiffeur.component';
import { AddCoiffeurComponent } from './coiffeur/add-coiffeur/add-coiffeur.component';
import { UpdateCoiffeurComponent } from './coiffeur/update-coiffeur/update-coiffeur.component';
import { DetailsCoiffeurComponent } from './coiffeur/details-coiffeur/details-coiffeur.component';
import { DetailsProprietaireComponent } from './proprietaire/details-proprietaire/details-proprietaire.component';
import { UpdateProprietaireComponent } from './proprietaire/update-proprietaire/update-proprietaire.component';
import { AddProprietaireComponent } from './proprietaire/add-proprietaire/add-proprietaire.component';
import { ListProprietaireComponent } from './proprietaire/list-proprietaire/list-proprietaire.component';
import { ListSalonComponent } from './list-salon/list-salon.component';
import { AddSalonComponent } from './add-salon/add-salon.component';
import { UpdateSalonComponent } from './update-salon/update-salon.component';
import { DetailsSalonComponent } from './details-salon/details-salon.component';
import { ListServiceClassComponent } from './serviceClass/list-service-class/list-service-class.component';
import { AddServiceClassComponent } from './serviceClass/add-service-class/add-service-class.component';
import { UpdateServiceClassComponent } from './serviceClass/update-service-class/update-service-class.component';
import { DetailsServiceClassComponent } from './serviceClass/details-service-class/details-service-class.component';


const routes: Routes = [
  {path:'list-client',component:ListClientComponent},
  {path:'add-client',component:AddClientComponent},
  {path:'update-client/:id',component:UpdateClientComponent},
  {path:'details-client/:id',component:DetailsClientComponent},
  {path:'list-coiffeur',component:ListCoiffeurComponent},
  {path:'add-coiffeur',component:AddCoiffeurComponent},
  {path:'update-coiffeur/:id',component:UpdateCoiffeurComponent},
  {path:'details-coiffeur/:id',component:DetailsCoiffeurComponent},
  {path:'list-proprietaire',component:ListProprietaireComponent},
  {path:'add-proprietaire',component:AddProprietaireComponent},
  {path:'update-proprietaire/:id',component:UpdateProprietaireComponent},
  {path:'details-proprietaire/:id',component:DetailsProprietaireComponent},
  {path:'list-salon',component:ListSalonComponent},
  {path:'add-salon',component:AddSalonComponent},
  {path:'update-salon/:id',component:UpdateSalonComponent},
  {path:'details-salon/:id',component:DetailsSalonComponent},
  {path:'list-service',component:ListServiceClassComponent},
  {path:'add-service',component:AddServiceClassComponent},
  {path:'update-service/:id',component:UpdateServiceClassComponent},
  {path:'details-service/:id',component:DetailsServiceClassComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
