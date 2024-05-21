import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceClassService } from '../service-class.service';

@Component({
  selector: 'app-update-service-class',
  templateUrl: './update-service-class.component.html',
  styleUrls: ['./update-service-class.component.css']
})
export class UpdateServiceClassComponent implements OnInit {
  
  id:any;
  constructor(private router:Router,private route:ActivatedRoute,private service:ServiceClassService) { }
  FormArticle= new FormGroup({
 
    id: new FormControl(''),
    nomService:new FormControl('', Validators.required),
    description: new FormControl('',Validators.required),
    prixService: new FormControl('',Validators.required),
    
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
		this.router.navigate(["/list-service"]);
	}
 
 



  
  update(){
    if(this.FormArticle.valid){debugger
      this.service.update(this.FormArticle.value.id,this.FormArticle.value).subscribe(
        (res) => {
          console.log('Type mis à jour avec succès :', res);
          debugger
          Swal.fire({
            title: 'Enregistrement réussi!',
            text: 'Service enregistré avec succès.',
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
            text: 'Un problème est survenu lors de l\'enregistrement du service.',
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