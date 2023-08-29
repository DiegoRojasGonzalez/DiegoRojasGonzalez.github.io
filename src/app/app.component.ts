import { Component, HostListener, OnInit } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public tracks: Howl[] = [];
  public isMuted: boolean = false;
  private sectionIndex: number = -1; // Inicializamos con un valor fuera de rango
  private screenWidth: number = window.innerWidth;
  private screenHeight: number = window.innerHeight;

  ngOnInit(): void {
    this.tracks.push(new Howl({ src: ['assets/sound/sound.mp3'], loop: true, volume: 0 }));
    this.tracks.push(new Howl({ src: ['assets/sound/soundflanger.mp3'], loop: true, volume: 0 }));
    this.tracks.push(new Howl({ src: ['assets/sound/soundhighpass.mp3'], loop: true, volume: 0 }));
    this.tracks.push(new Howl({ src: ['assets/sound/soundllowpass.mp3'], loop: true, volume: 0 }));

    this.tracks.forEach(track => track.play());
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isMuted) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const sectionX = Math.floor((mouseX / this.screenWidth) * 2);
      const sectionY = Math.floor((mouseY / this.screenHeight) * 2);
      this.sectionIndex = sectionX + sectionY * 2;

      for (let i = 0; i < this.tracks.length; i++) {
        if (i === this.sectionIndex) {
          this.tracks[i].volume(0.5); 
        } else {
          this.tracks[i].volume(0); 
        }
      }
    }
  }

  buttonClick(): void {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.tracks.forEach(track => track.volume(0));
    } else {
      this.tracks.forEach((track, i) => {
        if (i === this.sectionIndex) {
          track.volume(0.5);
        } else {
          track.volume(0);
        }
      });
    }
  }
}
