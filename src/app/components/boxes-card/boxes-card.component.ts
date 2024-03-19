import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'boxes-card',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './boxes-card.component.html',
  styleUrl: './boxes-card.component.css',
})
export class BoxesCardComponent implements OnInit {
  httpClient = inject(HttpClient);
  data: any[] = []

  ngOnInit(): void {
    this.fetchData()
  }
  fetchData() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((data: any) => {
      console.log(data)
    })
  }
}
