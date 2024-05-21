import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProprietaireService } from '../proprietaire.service';
import { InterfaceProprietaire } from '../list-proprietaire/list-proprietaire.component';

@Component({
  selector: 'app-add-proprietaire',
  templateUrl: './add-proprietaire.component.html',
  styleUrls: ['./add-proprietaire.component.css']
})
export class AddProprietaireComponent implements OnInit {
  
  proprietaires:InterfaceProprietaire[]=[]
  FormArticle:FormGroup;
  constructor(private router:Router,private service:ProprietaireService) { }

  
  ngOnInit() {
    this.FormArticle= new FormGroup({
 
      id: new FormControl(''),
      nomProprietaire:new FormControl('', Validators.required),
      prenomProprietaire: new FormControl('',Validators.required),
      cinProprietaire: new FormControl('',Validators.required),
      emailProprietaire: new FormControl('',Validators.required),
      telProprietaire: new FormControl('',Validators.required),
      
        });

  }
  RetourEmbalages(): void {
		this.router.navigate(["/list-proprietaire"]);
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
            text: 'Proprietaire enregistré avec succès.',
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
            text: 'Un problème est survenu lors de l\'enregistrement du Proprietaire.',
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
