import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit{

  public welcomeString: string = "Welcome..."
  public visualText = signal('');
  public fakeInputLine: string = "|"
  public animatedText: string[] = []

  ngOnInit(): void {

    this.animateText();

  }

  animateText() {
    for (let i = 0; i < this.welcomeString.length; i++) {
      if (this.visualText().length < this.welcomeString.length) {
        this.buildText(i);
      }
    }
  }

  buildText(i: number) {
    setTimeout(() => {
      this.visualText.update(prev => prev + this.welcomeString[i]);
    }, i * 200);
  }

}
