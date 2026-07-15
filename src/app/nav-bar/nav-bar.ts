import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBarComponent {
  isDarkMode = signal(false);
  isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Nếu cuộn xuống quá 20px thì bật hiệu ứng
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleTheme() {
    const next = !this.isDarkMode();
    this.isDarkMode.set(next);

    if (next) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }
}
