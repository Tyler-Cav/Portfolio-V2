import { Routes } from '@angular/router';
import { StyleGuide } from './For-Dev-Only/style-guide/style-guide';
import { HomePage } from './home-page/home-page';
import { KeyboardCollectionPage } from './keyboard-collection-page/keyboard-collection-page'

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
  {
    path: 'keyboard-collection',
    component: KeyboardCollectionPage
  }
];
