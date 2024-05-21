import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProprietaireService } from '../proprietaire.service';
import { InterfaceProprietaire } from '../list-proprietaire/list-proprietaire.component';

@Component({
  selector: 'app-update-proprietaire',
  templateUrl: './update-proprietaire.component.html',
  styleUrls: ['./update-proprietaire.component.css']
})
export class UpdateProprietaireComponent implements OnInit {

  proprietaires:InterfaceProprietaire[]=[]
  id:any;
  constructor(private router:Router,private route:ActivatedRoute,private service:ProprietaireService) { }
  FormArticle= new FormGroup({
 
    id: new FormControl(''),
      nomProprietaire:new FormControl('', Validators.required),
      prenomProprietaire: new FormControl('',Validators.required),
      cinProprietaire: new FormControl('',Validators.required),
      emailProprietaire: new FormControl('',Validators.required),
      telProprietaire: new FormControl('',Validators.required),
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

    
  }
  RetourEmbalages(): void {
		this.router.navigate(["/list-proprietaire"]);
	}
 
 
  
  update(){
    if(this.FormArticle.valid){debugger
      this.service.update(this.FormArticle.value.id,this.FormArticle.value).subscribe(
        (res) => {
          console.log('Type mis à jour avec succès :', res);
          debugger
          Swal.fire({
            title: 'Enregistrement réussi!',
            text: 'Proprietaire enregistré avec succès.',
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
            text: 'Un problème est survenu lors de l\'enregistrement du proprietaire.',
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
