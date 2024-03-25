import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GetboxesService } from '../../services/getboxes.service';

@Component({
  selector: 'boxes-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boxes-card.component.html',
  styleUrl: './boxes-card.component.css',
})
export class BoxesCardComponent implements OnInit {

  boxes: any

  constructor(private getBoxes: GetboxesService) { }

  ngOnInit(): void {
    this.getBoxes.getBoxes().subscribe(
      response => {
        this.boxes = response
        console.table(this.boxes)
      },
      error => {
        console.error('Flop service :', error)
      }
    )
  }
}
