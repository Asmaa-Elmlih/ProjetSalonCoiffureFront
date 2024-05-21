import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceClassService } from '../service-class.service';

@Component({
  selector: 'app-add-service-class',
  templateUrl: './add-service-class.component.html',
  styleUrls: ['./add-service-class.component.css']
})
export class AddServiceClassComponent implements OnInit {
  
  FormArticle:FormGroup;
  constructor(private router:Router,private service:ServiceClassService) { }

  
  ngOnInit() {
    this.FormArticle= new FormGroup({
 
      id: new FormControl(''),
      nomService:new FormControl('', Validators.required),
      description: new FormControl('',Validators.required),
      prixService: new FormControl('',Validators.required),
      
        });

       
  }
  RetourEmbalages(): void {
		this.router.navigate(["/list-service"]);
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
            text: 'Service enregistré avec succès.',
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
            text: 'Un problème est survenu lors de l\'enregistrement du service.',
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
