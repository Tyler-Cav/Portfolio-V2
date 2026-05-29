import { Routes } from '@angular/router';
import { StyleGuide } from './For-Dev-Only/style-guide/style-guide';
import { HomePage } from './home-page/home-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'style-guide',
    component: StyleGuide,
  },
];
