import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { About } from './about/about';
import { Projects } from './projects/projects';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: '**', redirectTo: '' }
];
