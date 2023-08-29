import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  private selectedMenuItem = 1;
  private hasKeyboardFocus = false;
  selectedImage: string = '';

  constructor() {
    this.selectedMenuItem = 1;
    this.updateSelectedImage();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowUp' && this.selectedMenuItem > 1) {
      this.selectedMenuItem--;
    } else if (event.key === 'ArrowDown' && this.selectedMenuItem < 5) {
      this.selectedMenuItem++;
    }
    this.hasKeyboardFocus = true;
    this.updateSelectedImage();
  }

  onMenuItemClick(menuItemNumber: number) {
    this.selectedMenuItem = menuItemNumber;
    this.updateSelectedImage();
  }

  private updateSelectedImage() {
    const imageNames = ['material','glass2', 'glass3', 'glass4', 'nebula'];
    this.selectedImage = this.selectedMenuItem > 0 ? `https://raw.githubusercontent.com/DiegoRojasGonzalez/Resources/main/DiegoRojasGonzalez.github.io/${imageNames[this.selectedMenuItem - 1]}.gif` : '';
  }

  isMenuItemSelected(menuItemNumber: number): boolean {
    return this.selectedMenuItem === menuItemNumber;
    
  }
}
