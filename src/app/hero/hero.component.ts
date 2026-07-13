import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, OnDestroy {
  // Biến lưu trạng thái theme hiện tại (mặc định là false - Light Theme)
  isDarkMode = signal(false);

  // Typing animation — dùng signal để Angular zoneless detect changes
  displayText = signal('');

  private currentRoleIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  private typingTimeout: ReturnType<typeof setTimeout> | null = null;

  readonly roles = [
    'AI Engineer',
    'Machine Learning Dev',
    'Problem Solver',
    'Deep Learning Explorer',
  ];

  ngOnInit() {
    this.scheduleNextTick(400);
  }

  ngOnDestroy() {
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
  }

  private scheduleNextTick(delay: number) {
    this.typingTimeout = setTimeout(() => this.tick(), delay);
  }

  private tick() {
    const currentRole = this.roles[this.currentRoleIndex];

    if (!this.isDeleting && this.currentCharIndex < currentRole.length) {
      // Gõ từng ký tự
      this.currentCharIndex++;
      this.displayText.set(currentRole.substring(0, this.currentCharIndex));
      this.scheduleNextTick(110);
    } else if (!this.isDeleting && this.currentCharIndex === currentRole.length) {
      // Gõ xong → chờ rồi xóa
      this.isDeleting = true;
      this.scheduleNextTick(1800);
    } else if (this.isDeleting && this.currentCharIndex > 0) {
      // Xóa từng ký tự
      this.currentCharIndex--;
      this.displayText.set(currentRole.substring(0, this.currentCharIndex));
      this.scheduleNextTick(60);
    } else {
      // Xóa xong → chuyển role tiếp
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      this.scheduleNextTick(400);
    }
  }

  // Hàm xử lý khi người dùng click vào icon mặt trời/mặt trăng
  toggleTheme() {
    const next = !this.isDarkMode();
    this.isDarkMode.set(next);

    // Thêm hoặc xóa attribute 'data-theme' vào thẻ gốc <html>
    if (next) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  // Hàm xử lý cuộn trang
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      // Hàm scrollIntoView có sẵn của JavaScript, thêm behavior: 'smooth' để cuộn từ từ
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
