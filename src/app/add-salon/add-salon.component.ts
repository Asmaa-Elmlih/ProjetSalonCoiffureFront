import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SalonService } from '../services/salon.service';
import { ProprietaireService } from '../proprietaire/proprietaire.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InterfaceProprietaire } from '../proprietaire/list-proprietaire/list-proprietaire.component';

@Component({
  selector: 'app-add-salon',
  templateUrl: './add-salon.component.html',
  styleUrls: ['./add-salon.component.css']
})
export class AddSalonComponent implements OnInit {
  proprietaires:InterfaceProprietaire[]=[];
  FormArticle:FormGroup;
  constructor(private router:Router,private service:SalonService,private serviceProprietaire:ProprietaireService) { }

  
  ngOnInit() {
    this.FormArticle= new FormGroup({
 
      id: new FormControl(''),
      nomSalon:new FormControl('', Validators.required),
      addresse: new FormControl('',Validators.required),
      proprietaire: new FormControl('',Validators.required),
      
        });

        this.serviceProprietaire.getAll(0,0).subscribe(
          (res:any)=>{
          this.proprietaires=res.content;
        });
  }
  RetourEmbalages(): void {
		this.router.navigate(["/list-salon"]);
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
            text: 'Controle Activite enregistré avec succès.',
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
            text: 'Un problème est survenu lors de l\'enregistrement du Constateur.',
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
