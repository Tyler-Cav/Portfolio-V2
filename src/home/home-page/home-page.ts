import { Component } from '@angular/core';
import { ThemeButton } from '../../app/header/theme-button/theme-button';

@Component({
  selector: 'app-home-page',
  imports: [ThemeButton],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
