import { Component, OnInit, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FloatingKeyword {
  text: string;
  left?: string;
  right?: string;
  top: string;
  delay: string;
  duration: string;
  scale: string;

  isDragging?: boolean;
  isFadingOut?: boolean;
  transformX: number;
  transformY: number;
  isActiveAnimation: boolean;
}

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  keywords: FloatingKeyword[] = [];
  isDraggingAny = false;

  private dragStartX = 0;
  private dragStartY = 0;
  private draggedKeyword: FloatingKeyword | null = null;

  readonly roles = [
    'AI Engineer',
    'Machine Learning',
    'Researcher',
    'Deep Learning',
    'Computer Vision',
    'Problem Solver',
    'Data Science',
    'NLP'
  ];

  // Placeholder animation state
  placeholderText = signal('');
  private questionIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  
  readonly placeholderQuestions = [
    'Hải My đang theo học ở đâu ?',
    'Hải My có dự án nào nổi bật ?',
    'Sở thích của Hải My là gì ?'
  ];

  ngOnInit() {
    this.startPlaceholderAnimation();
    
    const basePositions = [
      // Bên trái (từ 30% đến 54%)
      { left: 5, top: 30 },
      { left: 15, top: 38 },
      { left: 3, top: 46 },
      { left: 12, top: 54 },
      // Bên phải (từ 33% đến 57%)
      { right: 5, top: 33 },
      { right: 15, top: 41 },
      { right: 3, top: 49 },
      { right: 12, top: 57 }
    ];

    this.keywords = this.roles.map((role, index) => {
      const pos = basePositions[index % basePositions.length];
      const jitter = Math.random() * 4 - 2;
      const topPos = pos.top + jitter;

      const kw: FloatingKeyword = {
        text: role,
        top: `${topPos}%`,
        delay: `${Math.random() * 20}s`,
        duration: `${Math.random() * 10 + 25}s`,
        scale: `${Math.random() * 0.3 + 0.8}`,
        transformX: 0,
        transformY: 0,
        isActiveAnimation: true
      };

      if (pos.left !== undefined) {
        kw.left = `${pos.left + jitter}%`;
      } else if (pos.right !== undefined) {
        kw.right = `${pos.right + jitter}%`;
      }

      return kw;
    });
  }

  onGrab(event: MouseEvent | TouchEvent, kw: FloatingKeyword) {
    // Prevent default to avoid text selection issues
    event.preventDefault();

    this.isDraggingAny = true;
    kw.isDragging = true;
    this.draggedKeyword = kw;

    const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;

    this.dragStartX = clientX - kw.transformX;
    this.dragStartY = clientY - kw.transformY;
  }

  @HostListener('window:mousemove', ['$event'])
  @HostListener('window:touchmove', ['$event'])
  onDrag(event: MouseEvent | TouchEvent) {
    if (!this.draggedKeyword) return;

    const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;

    this.draggedKeyword.transformX = clientX - this.dragStartX;
    this.draggedKeyword.transformY = clientY - this.dragStartY;
  }

  @HostListener('window:mouseup')
  @HostListener('window:touchend')
  onRelease() {
    if (!this.draggedKeyword) return;

    const kw = this.draggedKeyword;

    // Release from drag state
    kw.isDragging = false;
    this.isDraggingAny = false;
    this.draggedKeyword = null;

    // Trigger fade out
    kw.isFadingOut = true;

    // Wait for fade out to complete, then reset
    setTimeout(() => {
      kw.isFadingOut = false;
      kw.transformX = 0;
      kw.transformY = 0;

      // Force restart of CSS animation cycle by toggling isActiveAnimation
      kw.isActiveAnimation = false;
      setTimeout(() => {
        kw.isActiveAnimation = true;
      }, 50);
    }, 1000); // 1000ms fade out duration
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private startPlaceholderAnimation() {
    const currentQ = this.placeholderQuestions[this.questionIndex];
    
    if (this.isDeleting) {
      this.placeholderText.set(currentQ.substring(0, this.charIndex - 1));
      this.charIndex--;
    } else {
      this.placeholderText.set(currentQ.substring(0, this.charIndex + 1));
      this.charIndex++;
    }

    // Tốc độ gõ chữ (typing) và xoá chữ (deleting)
    let typeSpeed = this.isDeleting ? 40 : 80;

    if (!this.isDeleting && this.charIndex === currentQ.length) {
      // Dừng lại một chút khi gõ xong câu
      typeSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.questionIndex = (this.questionIndex + 1) % this.placeholderQuestions.length;
      // Dừng một chút trước khi gõ câu mới
      typeSpeed = 500;
    }

    setTimeout(() => this.startPlaceholderAnimation(), typeSpeed);
  }
}
