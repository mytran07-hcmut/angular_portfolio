import { Directive, ElementRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Thêm class gốc để khởi tạo trạng thái CSS ban đầu (opacity: 0, transform...)
    this.renderer.addClass(this.el.nativeElement, 'scroll-reveal');

    // Tạo Intersection Observer để theo dõi khi phần tử đi vào viewport
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Kích hoạt khi 10% phần tử xuất hiện
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Khi phần tử xuất hiện, thêm class để chạy animation
          this.renderer.addClass(this.el.nativeElement, 'is-visible');
          
          // Sau khi đã hiện lên, ngừng theo dõi phần tử này (chỉ animate 1 lần)
          if (this.observer) {
            this.observer.unobserve(this.el.nativeElement);
          }
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
