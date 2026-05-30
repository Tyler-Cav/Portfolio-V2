import { Component, signal, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

  protected readonly title = signal('Portfolio-V2');

  ngOnInit(): void {
    this.themeService.themeInitCheck();
  }
}
