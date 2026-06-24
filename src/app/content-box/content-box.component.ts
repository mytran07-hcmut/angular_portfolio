import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-box.component.html',
  styleUrl: './content-box.component.css'
})
export class ContentBoxComponent {
  // Biến title sẽ nhận giá trị từ bên ngoài (ví dụ: 'About me', 'Experience')
  @Input() title: string = '';
}