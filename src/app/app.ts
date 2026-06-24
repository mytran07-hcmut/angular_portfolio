import { Component, signal } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ContentBoxComponent } from "./content-box/content-box.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeroComponent, ContentBoxComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio-app');
}
