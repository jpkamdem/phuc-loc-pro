import { CommonModule, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommandesService } from '../../services/commandes.service';

@Component({
  selector: 'commandes',
  standalone: true,
  imports: [],
  templateUrl: './commandes.component.html',
  styleUrl: './commandes.component.css',
})
export class CommandesComponent implements OnInit {

  commandes: any[] = []

  constructor(private commandesService: CommandesService) {}

  ngOnInit(): void {
    this.commandesService.envoyerCommande.subscribe((commande: any) => {
      this.ajouterCommande(commande)
    })
  }

  ajouterCommande(commande: any): void {
    this.commandes.push(commande)
  }
}
