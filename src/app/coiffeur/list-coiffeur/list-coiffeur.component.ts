import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoiffeurService } from '../coiffeur.service';
import { PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-coiffeur',
  templateUrl: './list-coiffeur.component.html',
  styleUrls: ['./list-coiffeur.component.css']
})
export class ListCoiffeurComponent implements OnInit {
  page:number=0;
  size:number=5;
  totalElements:number=0;
  coiffeur:InterfaceCoiffeur[]=[];
  motCle:string;
  displayedColumns: string[] = ["Id", "nom", "prenom", "cin", "tel", "prop","salon","email", "actions"];
  constructor(private router:Router,private service:CoiffeurService) { }

  ngOnInit() {
    this.getAll()
  }
 
	

  add(){
    return this.router.navigate(["/add-coiffeur"])
  }
  Details(id:any){
    return this.router.navigate(["/details-coiffeur/",id])
  }
  Modifier(id:any){
    return this.router.navigate(["/update-coiffeur/",id])
  }
  getAll(){
    this.service.getAll(this.page,this.size).subscribe((res:any)=>
      {
        this.coiffeur=res.content;
        this.totalElements=res.totalElements;
        console.log(res)
      },err=>{
        console.log(err)
      }
      )
  }
  onPageChange(event:PageEvent){
    this.page=event.pageIndex;
    this.size=event.pageSize;
    this.getAll();
  }
  getFilterData(filter): void {
    this.service.findByMotCle(filter).subscribe((data:any) => {
            this.coiffeur = data.content; 
        },
            (err) => {
                console.log(err);
            });
  }
  applyFilter(filterValue: string) {debugger
    if(filterValue.length==0){debugger
        this.getAll()
        this.motCle=""
    }
    else{debugger
        this.motCle = filterValue 
		console.log(" applyFilter", this.motCle);
		debugger
    this.getFilterData(this.motCle);
    }
}
  delete(id:any){
    Swal.fire({
			title: ' ',
			text: "voulez-vous vraiment supprimer ce  entrées de stock  ?",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Supprimer',
			cancelButtonText: 'Fermer'
	  
		  }).then((result) => {
			 if (result.isConfirmed) {
				this.service.delete(id).subscribe(res=>{
				this.ngOnInit();
				Swal.fire({
				  title: 'entrées de stock à été   supprimé avec succès !',
				  icon: 'success',
				});
			  },err=>{
				console.log(err)
			  })
			}
		  })
  }



}
export interface InterfaceCoiffeur{
  id:number;
  nomCoiffeur:string;
  prenomCoiffeur:string;
  cinCoiffeur:string;
  telCoiffeur:string;
  emailCoiffeur:string;
  proprietaire:any;
  salon:any
}