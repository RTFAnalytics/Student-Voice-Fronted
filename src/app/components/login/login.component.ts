import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isActiveBlueToggle: boolean = false;
  isActiveGradientToggle: boolean = false;

  toggleBlue() {
    this.isActiveBlueToggle = !this.isActiveBlueToggle;
  }

  toggleGradient() {
    this.isActiveGradientToggle = !this.isActiveGradientToggle;
  }
}
