import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboard-collection-page',
  imports: [],
  templateUrl: './keyboard-collection-page.html',
  styleUrl: './keyboard-collection-page.css',
})
export class KeyboardCollectionPage {


  scrollToSection(element: HTMLElement) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

}
