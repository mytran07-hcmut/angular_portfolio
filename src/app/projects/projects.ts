import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { FEATURED_PROJECT, EXPLORER_PROJECTS, RESEARCH_PROJECTS, FeaturedProject, Project, ResearchProject } from './projects.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements AfterViewInit {
  featuredProject: FeaturedProject = FEATURED_PROJECT;
  explorerProjects: Project[] = EXPLORER_PROJECTS;
  researchProjects: ResearchProject[] = RESEARCH_PROJECTS;

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
