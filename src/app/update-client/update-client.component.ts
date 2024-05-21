import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClientService } from '../services/client.service';
import { SalonService } from '../services/salon.service';
import { InterfaceSalon } from '../list-salon/list-salon.component';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  salons:InterfaceSalon[]=[]
  id:any;
  constructor(private router:Router,private route:ActivatedRoute,private service:ClientService,private serviceSalon:SalonService) { }
  FormArticle= new FormGroup({
 
    id: new FormControl(''),
    nomClient: new FormControl('',Validators.required),
    prenomClient: new FormControl('',Validators.required),
    cinClient: new FormControl('',Validators.required),
    telClient: new FormControl('',Validators.required),
    emailClient: new FormControl('',Validators.required),
    salon: new FormControl('',Validators.required),
    
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
  }
  RetourEmbalages(): void {
		this.router.navigate(["/list-client"]);
	}
 
  selectedValueStatutFunction(p1: InterfaceSalon, p2: InterfaceSalon) {
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
