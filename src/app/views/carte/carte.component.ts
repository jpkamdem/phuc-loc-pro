import { Component } from '@angular/core';
import { BoxesCardComponent } from '../../components/boxes-card/boxes-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'carte',
  standalone: true,
  imports: [CommonModule, BoxesCardComponent],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})
export class CarteComponent {

}
