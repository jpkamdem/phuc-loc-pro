import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {
  private envoyerCommandeSubject: Subject<any> = new Subject<any>()
  envoyerCommande: Observable<any> = this.envoyerCommandeSubject.asObservable()

  constructor() { }

  envoyeNouvelleCommande(commande: any): void {
    this.envoyerCommandeSubject.next(commande)
  }
}
