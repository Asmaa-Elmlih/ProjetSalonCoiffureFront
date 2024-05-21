import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProprietaireService } from '../proprietaire.service';

@Component({
  selector: 'app-list-proprietaire',
  templateUrl: './list-proprietaire.component.html',
  styleUrls: ['./list-proprietaire.component.css']
})
export class ListProprietaireComponent implements OnInit {

  page:number=0;
  size:number=5;
  totalElements:number=0;
  proprietaires:InterfaceProprietaire[]=[];
  motCle:string;
  displayedColumns: string[] = ["Id", "nom", "prenom", "cin", "tel", "email", "actions"];
  constructor(private router:Router,private service:ProprietaireService) { }

  ngOnInit() {
    this.getAll()
  }
 
	

  add(){
    return this.router.navigate(["/add-proprietaire"])
  }
  Details(id:any){
    return this.router.navigate(["/details-proprietaire/",id])
  }
  Modifier(id:any){
    return this.router.navigate(["/update-proprietaire/",id])
  }
  getAll(){
    this.service.getAll(this.page,this.size).subscribe((res:any)=>
      {
        this.proprietaires=res.content;
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
            this.proprietaires = data.content; 
        },
            (err) => {
                console.log(err);
            });
  }
  applyFilter(filterValue: string) {
    if(filterValue.length==0){
        this.getAll()
        this.motCle=""
    }
    else{
        this.motCle = filterValue 
		console.log(" applyFilter", this.motCle);
		
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
export interface InterfaceProprietaire{
  id:number;
   nomProprietaire:string;
   prenomProprietaire:string;
   telProprietaire:string;
   emailProprietaire:string;
}