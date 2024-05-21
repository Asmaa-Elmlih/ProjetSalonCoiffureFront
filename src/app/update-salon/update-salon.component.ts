import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SalonService } from '../services/salon.service';
import { InterfaceProprietaire } from '../proprietaire/list-proprietaire/list-proprietaire.component';
import { ProprietaireService } from '../proprietaire/proprietaire.service';

@Component({
  selector: 'app-update-salon',
  templateUrl: './update-salon.component.html',
  styleUrls: ['./update-salon.component.css']
})
export class UpdateSalonComponent implements OnInit {

  id:any;
  proprietaires:InterfaceProprietaire[]=[]
  constructor(private router:Router,private route:ActivatedRoute,private service:SalonService,private serviceProprietaire:ProprietaireService) { }
  FormArticle= new FormGroup({
 
    id: new FormControl(''),
      nomSalon:new FormControl('', Validators.required),
      addresse: new FormControl('',Validators.required),
      proprietaire: new FormControl('',Validators.required),
    
      });

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.service.getById(this.id).subscribe((res)=>{
      console.log(res)
              this.FormArticle.patchValue({...res});
              this.FormArticle.value 
              console.log("pro",this.FormArticle.value )
    },
    (err)=>{
          console.log(err)
    });

    
    this.serviceProprietaire.getAll(0,0).subscribe(
      (res:any)=>{
      this.proprietaires=res.content;
    });
   
  }

  RetourEmbalages(): void {
		this.router.navigate(["/list-salon"]);
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
            text: 'Type Examen enregistré avec succès.',
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
            text: 'Un problème est survenu lors de l\'enregistrement du Type examen.',
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
