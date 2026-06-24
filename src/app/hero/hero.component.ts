import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  // Biến lưu trạng thái theme hiện tại (mặc định là false - Light Theme)
  isDarkMode = false;

  // Hàm xử lý khi người dùng click vào icon mặt trời/mặt trăng
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    
    // Thêm hoặc xóa attribute 'data-theme' vào thẻ gốc <html>
    if (this.isDarkMode) {
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
