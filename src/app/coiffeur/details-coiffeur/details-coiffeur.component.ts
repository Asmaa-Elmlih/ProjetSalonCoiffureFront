import { Component, OnInit } from '@angular/core';
import { CoiffeurService } from '../coiffeur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-coiffeur',
  templateUrl: './details-coiffeur.component.html',
  styleUrls: ['./details-coiffeur.component.css']
})
export class DetailsCoiffeurComponent implements OnInit {

  info: any;
  id: any;
  constructor(private service:CoiffeurService,private route:ActivatedRoute,private router:Router) { }

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
		this.router.navigate(["/list-coiffeur"]);
	}

}
