
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Logistics} from './components/logistics/logistics';
import { Projects } from './components/projects/projects';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: 'home', component: Home },
	{ path: 'logistics', component: Logistics },
	{ path: 'projects', component: Projects },
	{ path: '**', redirectTo: 'home' }
];
  