import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { InterfaceCoiffeur } from '../list-coiffeur/list-coiffeur.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoiffeurService } from '../coiffeur.service';
import { SalonService } from 'src/app/services/salon.service';
import { InterfaceSalon } from 'src/app/list-salon/list-salon.component';
import { ProprietaireService } from 'src/app/proprietaire/proprietaire.service';
import { InterfaceProprietaire } from 'src/app/proprietaire/list-proprietaire/list-proprietaire.component';

@Component({
  selector: 'app-add-coiffeur',
  templateUrl: './add-coiffeur.component.html',
  styleUrls: ['./add-coiffeur.component.css']
})
export class AddCoiffeurComponent implements OnInit {
  coiffeurs:InterfaceCoiffeur[]=[];
  salons:InterfaceSalon[]=[]
  proprietaires:InterfaceProprietaire[]=[]
  FormArticle:FormGroup;
  constructor(private router:Router,private service:CoiffeurService,private serviceSalon:SalonService,private serviceProprietaire:ProprietaireService) { }

  
  ngOnInit() {
    this.FormArticle= new FormGroup({
 
      id: new FormControl(''),
      nomCoiffeur:new FormControl('', Validators.required),
      prenomCoiffeur: new FormControl('',Validators.required),
      cinCoiffeur: new FormControl('',Validators.required),
      telCoiffeur: new FormControl('',Validators.required),
      emailCoiffeur: new FormControl('',Validators.required),
      salon: new FormControl('',Validators.required),
      proprietaire: new FormControl('',Validators.required),
      
        });

        this.serviceSalon.getAll(0,0).subscribe(
          (res)=>{
          this.salons=res;
        });
        this.serviceProprietaire.getAll(0,0).subscribe(
          (res)=>{
          this.proprietaires=res;
        });
  }
  RetourEmbalages(): void {
		this.router.navigate(["/list-coiffeur"]);
	}



  add() {
    // Vérifiez si le formulaire est valide
    debugger
    if (this.FormArticle.valid) {
      debugger
      // Envoyez les données uniquement si le formulaire est valide
      this.service.add(this.FormArticle.value).subscribe(
        (res) => {debugger
          console.log("le resultat:",res);
          debugger
          // Affichez le message de succès si le contrôle est enregistré avec succès
          Swal.fire({
            title: 'Enregistrement réussi!',
            text: 'Coiffeur enregistré avec succès.',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            // Réinitialisez le formulaire et rechargez les données si nécessaire
            this.FormArticle.reset();
            this.ngOnInit(); // Vous pouvez recharger les données si nécessaire ici
            this.RetourEmbalages();
          });
        },
        (err) => {
          console.error(err);
          // Affichez un message d'erreur en cas d'échec de l'enregistrement
          Swal.fire({
            title: 'Erreur!',
            text: 'Un problème est survenu lors de l\'enregistrement du coiffeur.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      );
    } else {
      // Affichez un message d'erreur si le formulaire est invalide
      Swal.fire({
        title: 'Erreur!',
        text: 'Veuillez remplir correctement tous les champs.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }

}
