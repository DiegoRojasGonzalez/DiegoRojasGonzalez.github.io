import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {
  loadingPercentage: number = 0;
  progressBar: string = '';
  paragraphs = [
    "[2003] BIOS Bug: Mysterious Object [\.DIEGOIGNACIOROJASGONZALEZ] evaded capture, COFFEE_NOT_FOUND (418/teapot-404):",
    "FATAL ERROR [2003]",
    "[2018] Cautionary Reminder: Fragile Tech Realm, Excessive Laptop Demise Detected",
    "[2021] New Beginnings: Embarked on the Coding Odyssey, Uncharted Territories Await!",
    "[2021] Centering Woes: The Enigma of the Unaligned Div Persists",
    "[2023] ACPI Error: Emergency Shutdown of \_SB.OSC due to prior anomaly (AE_NOT_FOUND)",
    "[Completed] Assembling Tech Stack",
    "[Complete] Loading projects",
  ];
  visibleParagraphs: boolean[] = Array(this.paragraphs.length).fill(false);
  subscription: Subscription | undefined;

  ngOnInit(): void {
    this.startLoading();
  }

  startLoading(): void {
    const totalTime = 1500; 
    const totalIterations = 99;
    const intervalMs = totalTime / totalIterations;

    const interval$ = interval(intervalMs);

    this.subscription = interval$
      .pipe(takeWhile(() => this.loadingPercentage <= 99))
      .subscribe(() => {
        this.loadingPercentage += 1;

        this.paragraphs.forEach((_, i) => {
          if (this.loadingPercentage >= (i + 1) * (100 / this.paragraphs.length)) {
            this.visibleParagraphs[i] = true;
          }
        });

        this.updateProgressBar();

        if (this.loadingPercentage === 99) { 
          setTimeout(() => {
            this.hideLoader();
          }, 500);
        }
      });
  }

  updateProgressBar(): void {
    const completedBlocks = Math.floor(this.loadingPercentage / 5);
    const emptyBlocks = 20 - completedBlocks;

    this.progressBar =
      '|' + '■'.repeat(completedBlocks) + '□'.repeat(emptyBlocks) + '|';
  }

  hideLoader(): void {
    const terminalBgLoader = document.querySelector('.terminal-bg-loader');
    if (terminalBgLoader) {
      terminalBgLoader.classList.add('hidden');
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  showParagraph(index: number): boolean {
    return this.visibleParagraphs[index];
  }



}
