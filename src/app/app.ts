import { Component, signal, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { ThemeService } from '../theme-config.service';
import { Header } from './header/header/header'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {

  themeService = inject(ThemeService);
  router = inject(Router);

  protected readonly title = signal('Portfolio-V2');
  isKeyboardCollectionPage = false;

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.isKeyboardCollectionPage = event.urlAfterRedirects === '/keyboard-collection';
      });
  }
  ngOnInit(): void {
    this.themeService.themeInitCheck();
  }
}
