import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';
import { ContentBoxComponent } from '../content-box/content-box.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, HeroComponent, ContentBoxComponent, FooterComponent, ScrollRevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}
