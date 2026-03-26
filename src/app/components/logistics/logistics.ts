import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-logistics',
  standalone: true,
    imports: [NgIf],
    templateUrl: './logistics.html',
    styleUrls: ['./logistics.scss'],
})
  export class Logistics {
  zoomed = false;

  toggleZoom() {
    this.zoomed = !this.zoomed;
  }
}
