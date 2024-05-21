import { Component, OnInit } from '@angular/core';
import { ServiceClassService } from '../service-class.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-service-class',
  templateUrl: './details-service-class.component.html',
  styleUrls: ['./details-service-class.component.css']
})
export class DetailsServiceClassComponent implements OnInit {
  info: any;
  info1: any;
  name:any;
  id: any;
  constructor(private service:ServiceClassService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params['id']; // Récupération de l'ID à partir des paramètres de l'URL
      this.service.getById(this.id).subscribe(
        (data: any) => {
          this.info = data; // Stocker les informations récupérées dans la variable 'info'
        },
        (error: any) => {
          console.error('Erreur lors de la récupération des données :', error);
        }
      );
   
    });
  }
  RetourEmbalages(): void {
		this.router.navigate(["/list-service"]);
	}

 

}
