import { Component, signal, OnInit } from '@angular/core';
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
  constructor(private themeService: ThemeService) {}

  protected readonly title = signal('Portfolio-V2');

  ngOnInit(): void {
    this.themeService.themeInitCheck();
  }
}
