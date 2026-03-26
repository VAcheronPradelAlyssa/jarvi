import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-logistics',
  standalone: true,
  imports: [NgIf, RouterModule, Navbar],
  templateUrl: './logistics.html',
  styleUrls: ['./logistics.scss'],
})
export class Logistics implements AfterViewInit {
  zoomed = false;

  @ViewChild('voitureVideo') voitureVideo?: ElementRef<HTMLVideoElement>;
  @ViewChild('trainVideo') trainVideo?: ElementRef<HTMLVideoElement>;


  ngAfterViewInit() {
    // Lance la vidéo voiture si possible
    if (this.voitureVideo?.nativeElement) {
      this.voitureVideo.nativeElement.play().catch(() => {});
    }
    // Lance la vidéo train si possible
    if (this.trainVideo?.nativeElement) {
      this.trainVideo.nativeElement.play().catch(() => {});
    }
  }

  replayVideo(type: 'voiture' | 'train') {
    let video: HTMLVideoElement | undefined;
    if (type === 'voiture') {
      video = this.voitureVideo?.nativeElement;
    } else if (type === 'train') {
      video = this.trainVideo?.nativeElement;
    }
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }

  toggleZoom() {
    this.zoomed = !this.zoomed;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}
