import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SalonService } from '../services/salon.service';

@Component({
  selector: 'app-list-salon',
  templateUrl: './list-salon.component.html',
  styleUrls: ['./list-salon.component.css']
})
export class ListSalonComponent implements OnInit {

  page:number=0;
  size:number=5;
  totalElements:number=0;
  salon:InterfaceSalon[]=[];
  motCle:string;
  displayedColumns: string[] = ["Id", "nom", "addresse", "prop", "actions"];
  constructor(private router:Router,private service:SalonService) { }

  ngOnInit() {
    this.getAll()
  }
 
	

  add(){
    return this.router.navigate(["/add-salon"])
  }
  Details(id:any){
    return this.router.navigate(["/details-salon/",id])
  }
  Modifier(id:any){
    return this.router.navigate(["/update-salon/",id])
  }
  getAll(){
    this.service.getAll(this.page,this.size).subscribe((res:any)=>
      {
        this.salon=res.content;
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
            this.salon = data.content; 
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
export interface InterfaceSalon{
  id:number;
  nomSalon:string;
  adresse:string;
  proprietaire:any;
}
