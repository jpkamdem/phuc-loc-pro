import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GetboxesService } from '../../services/getboxes.service';

@Component({
  selector: 'carte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})
export class CarteComponent implements OnInit  {

  boxes: any

  panier: any[] = []

  total: number = 0

  constructor(private getBoxes: GetboxesService) { }

  ngOnInit(): void {
    this.getBoxes.getBoxes().subscribe(
      response => {
        this.boxes = response
      },
      error => {
        console.error('Flop service :', error)
      }
    )
  }

  ajouterBox(idBox: number) {
    const boxAAjouter: any = this.boxes.find((box: any) => box.id_box === idBox);
    if (this.panier.length >= 10) {
      alert('Maximum 10 articles')
    } else {
      this.panier.push(boxAAjouter);
      this.calculerTotal()
    }
  }
  supprimerBox(idBox: number) {
    const index: number = this.panier.findIndex((box: any) => box.id_box === idBox);
    
    if (index !== -1) {
      this.panier.splice(index, 1);
      this.calculerTotal()
    } else {
      alert("L'article n'est pas présent dans le panier.");
    }
  }

  displayErrorMessage(message: string) {
    console.error(message);
  }

  calculerTotal(): void {
    this.total = this.panier.reduce((acc, box) => {
      return acc + box.prix;
    }, 0);
  }

  validerCommande() {
    if (this.panier.length > 0) {
      this.panier = []
      this.calculerTotal()
    } else {
      alert('Panier vide.')
    }
  }
}
