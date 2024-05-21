import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceClassService } from '../service-class.service';

@Component({
  selector: 'app-list-service-class',
  templateUrl: './list-service-class.component.html',
  styleUrls: ['./list-service-class.component.css']
})
export class ListServiceClassComponent implements OnInit {

  page:number=0;
  size:number=5;
  totalElements:number=0;
  services:InterfaceService[]=[];
  motCle:string;
  displayedColumns: string[] = ["Id", "nom", "description", "prix", "actions"];
  constructor(private router:Router,private service:ServiceClassService) { }

  ngOnInit() {
    this.getAll()
  }
 
	

  add(){
    return this.router.navigate(["/add-service"])
  }
  Details(id:any){
    return this.router.navigate(["/details-service/",id])
  }
  Modifier(id:any){
    return this.router.navigate(["/update-service/",id])
  }
  getAll(){
    this.service.getAll(this.page,this.size).subscribe((res:any)=>
      {
        this.services=res.content;
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
            this.services = data.content; 
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
export interface InterfaceService{
  nomService:string,
  description:string,
  prixService:number,
}