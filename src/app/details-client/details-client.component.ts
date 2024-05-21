import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.css']
})
export class DetailsClientComponent implements OnInit {

  info: any;
  info1: any;
  name:any;
  id: any;
  constructor(private service:ClientService,private route:ActivatedRoute,private router:Router) { }

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
		this.router.navigate(["/list-client"]);
	}

 

}
