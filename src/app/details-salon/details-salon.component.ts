import { Component, OnInit } from '@angular/core';
import { SalonService } from '../services/salon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-salon',
  templateUrl: './details-salon.component.html',
  styleUrls: ['./details-salon.component.css']
})
export class DetailsSalonComponent implements OnInit {

  info: any;
  info1: any;
  name:any;
  id: any;
  constructor(private service:SalonService,private route:ActivatedRoute,private router:Router) { }

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
		this.router.navigate(["/list-salon"]);
	}

 

}
