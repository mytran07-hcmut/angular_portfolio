import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit {
  @ViewChildren('revealSection') sections!: QueryList<ElementRef>;

  ngAfterViewInit() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        },
        {
          threshold: 0.15,
        }
      );

      this.sections.forEach((section) => {
        observer.observe(section.nativeElement);
      });
    } else {
       this.sections.forEach((section) => {
          section.nativeElement.classList.add('is-visible');
       });
    }
  }
}
