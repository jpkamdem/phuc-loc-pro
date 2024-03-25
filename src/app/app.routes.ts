import { Routes } from '@angular/router';
import { AccueilComponent } from './views/accueil/accueil.component';
import { InfosComponent } from './views/infos/infos.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { CarteComponent } from './views/carte/carte.component';
import { CommandesComponent } from './views/commandes/commandes.component';

export const routes: Routes = [
    {path: '', component: AccueilComponent},
    {path: 'accueil', component: AccueilComponent},
    {path: 'infos', component: InfosComponent},
    {path: 'notfound', component: NotfoundComponent},
    {path: 'carte', component: CarteComponent},
    {path: 'commandes', component: CommandesComponent},
    {path: '**', component: NotfoundComponent}
];
