import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InterfaceSalon } from 'src/app/list-salon/list-salon.component';
import { InterfaceProprietaire } from 'src/app/proprietaire/list-proprietaire/list-proprietaire.component';
import { ProprietaireService } from 'src/app/proprietaire/proprietaire.service';
import Swal from 'sweetalert2';
import { CoiffeurService } from '../coiffeur.service';
import { SalonService } from 'src/app/services/salon.service';

@Component({
  selector: 'app-update-coiffeur',
  templateUrl: './update-coiffeur.component.html',
  styleUrls: ['./update-coiffeur.component.css']
})
export class UpdateCoiffeurComponent implements OnInit {

  salons:InterfaceSalon[]=[]
  proprietaire:InterfaceProprietaire[]=[]
  id:any;
  constructor(private router:Router,private route:ActivatedRoute,private service:CoiffeurService,private serviceSalon:SalonService,private serviceProprietaire:ProprietaireService) { }
  FormArticle= new FormGroup({
 
    id: new FormControl(''),
      nomCoiffeur:new FormControl('', Validators.required),
      prenomCoiffeur: new FormControl('',Validators.required),
      cinCoiffeur: new FormControl('',Validators.required),
      telCoiffeur: new FormControl('',Validators.required),
      emailCoiffeur: new FormControl('',Validators.required),
      salon: new FormControl('',Validators.required),
      proprietaire: new FormControl('',Validators.required),
    
      });

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.service.getById(this.id).subscribe((res)=>{
      console.log(res)
              this.FormArticle.patchValue({...res});
              this.FormArticle.value 
    },
    (err)=>{
          console.log(err)
    });

    this.serviceSalon.getAll(0,0).subscribe(
      (res)=>{
      this.salons=res;
    });
    this.serviceProprietaire.getAll(0,0).subscribe(
      (res)=>{
      this.proprietaire=res;
    });
  }
  RetourEmbalages(): void {
		this.router.navigate(["/list-coiffeur"]);
	}
 
  selectedValueSalonFunction(p1: InterfaceSalon, p2: InterfaceSalon) {
		if (p1 && p2) {
			return p1.id === p2.id;
		}
		return false;
	}
  selectedValueProprietaireFunction(p1: InterfaceProprietaire, p2: InterfaceProprietaire) {
		if (p1 && p2) {
			return p1.id === p2.id;
		}
		return false;
	}



  
  update(){
    if(this.FormArticle.valid){debugger
      this.service.update(this.FormArticle.value.id,this.FormArticle.value).subscribe(
        (res) => {
          console.log('Type mis à jour avec succès :', res);
          debugger
          Swal.fire({
            title: 'Enregistrement réussi!',
            text: 'Coiffeur enregistré avec succès.',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            this.FormArticle.reset();
            this.ngOnInit(); // Vous pouvez recharger les données si nécessaire ici
            this.RetourEmbalages()
          });
        },
        (err) => {
          console.error('Erreur lors de la mise à jour du type :', err);
          Swal.fire({
            title: 'Erreur!',
            text: 'Un problème est survenu lors de l\'enregistrement du coiffeur.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      )
    }else{
      console.log('le formulaire est invalide');
    }
    }
}
