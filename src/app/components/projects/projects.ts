import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, Navbar],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects {
  zoomedScreenshot: string | null = null;

  openScreenshot(src: string) {
    this.zoomedScreenshot = src;
  }

  closeScreenshot() {
    this.zoomedScreenshot = null;
  }
}
