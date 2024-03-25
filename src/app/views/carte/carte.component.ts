import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GetboxesService } from '../../services/getboxes.service';
import { BoxesCardComponent } from '../../components/boxes-card/boxes-card.component';
@Component({
  selector: 'carte',
  standalone: true,
  imports: [CommonModule, BoxesCardComponent],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})
export class CarteComponent implements OnInit  {

  boxes: any

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
}
