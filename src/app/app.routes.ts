import { Routes } from '@angular/router';
import { StyleGuide } from './For-Dev-Only/style-guide/style-guide';
import { ThemeButton } from './header/theme-button/theme-button';

export const routes: Routes = [
  {
    path: '',
    component: ThemeButton,
  },
  {
    path: 'style-guide',
    component: StyleGuide,
  },
];
