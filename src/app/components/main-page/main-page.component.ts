import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  isActiveBlueToggle: boolean = false;
  isActiveGradientToggle: boolean = false;

  isFilled = false; // Состояние заполненного поля
  isInvalid = false; // Состояние валидации (ошибка)

  toggleBlue() {
    this.isActiveBlueToggle = !this.isActiveBlueToggle;
  }

  toggleGradient() {
    this.isActiveGradientToggle = !this.isActiveGradientToggle;
  }

  onFocus() {
    // Действие при фокусе (когда пользователь начинает вводить текст)
    this.isInvalid = false;
  }

  onBlur() {
    // Действие при выходе из фокуса (проверка на валидацию)
    if (!this.isFilled) {
      this.isInvalid = true; // Показываем ошибку, если поле пустое
    }
  }

  onInput(event: any) {
    // Проверяем, введен ли текст
    this.isFilled = event.target.value.length > 0;
    if (this.isFilled) {
      this.isInvalid = false; // Если есть текст, ошибки нет
    }
  }
}
