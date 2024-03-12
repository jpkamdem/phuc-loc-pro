import { Routes } from '@angular/router';
import { AccueilComponent } from './views/accueil/accueil.component';
import { InfosComponent } from './views/infos/infos.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { PanierComponent } from './views/panier/panier.component';
import { CarteComponent } from './views/carte/carte.component';

export const routes: Routes = [
    {path: '', component: AccueilComponent},
    {path: 'accueil', component: AccueilComponent},
    {path: 'infos', component: InfosComponent},
    {path: 'notfound', component: NotfoundComponent},
    {path: 'panier', component: PanierComponent},
    {path: 'carte', component: CarteComponent},
    {path: '**', component: NotfoundComponent}
];
