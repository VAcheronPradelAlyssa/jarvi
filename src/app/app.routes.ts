import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Logistics } from './components/logistics/logistics';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: 'home', component: Home },
	{ path: 'logistics', component: Logistics },
	{ path: '**', redirectTo: 'home' }
];
  