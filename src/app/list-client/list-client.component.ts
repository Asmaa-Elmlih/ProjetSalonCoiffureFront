import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import Swal from 'sweetalert2';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  page:number=0;
  size:number=5;
  totalElements:number=0;
  client:InterfaceClient[]=[];
  motCle:string;
  displayedColumns: string[] = ["Id", "nom", "prenom", "cin", "tel", "email", "actions"];
  constructor(private router:Router,private service:ClientService) { }

  ngOnInit() {
    this.getAll()
  }
 
	

  add(){
    return this.router.navigate(["/add-client"])
  }
  Details(id:any){
    return this.router.navigate(["/details-client/",id])
  }
  Modifier(id:any){
    return this.router.navigate(["/update-client/",id])
  }
  getAll(){
    this.service.getAll(this.page,this.size).subscribe((res:any)=>
      {
        this.client=res.content;
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
            this.client = data.content; 
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
export interface InterfaceClient{
  id:number,
  nomClient:string,
  prenomClient:string,
  cinClient:string,
  telClient:string,
  emailClient:string,
  salon:any,
}
