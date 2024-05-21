import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClientService } from '../services/client.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SalonService } from '../services/salon.service';
import { InterfaceSalon } from '../list-salon/list-salon.component';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  salons:InterfaceSalon[]=[];
  FormArticle:FormGroup;
  constructor(private router:Router,private service:ClientService,private serviceSalon:SalonService) { }

  
  ngOnInit() {
    this.FormArticle= new FormGroup({
 
      id: new FormControl(''),
      nomClient:new FormControl('', Validators.required),
      prenomClient: new FormControl('',Validators.required),
      cinClient: new FormControl('',Validators.required),
      telClient: new FormControl('',Validators.required),
      emailClient: new FormControl('',Validators.required),
      salon: new FormControl('',Validators.required),
      
        });

        this.serviceSalon.getAll(0,0).subscribe(
          (res)=>{
          this.salons=res;
        });
  }
  RetourEmbalages(): void {
		this.router.navigate(["/list-client"]);
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
