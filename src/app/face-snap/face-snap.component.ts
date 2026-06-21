import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snapped!: boolean;
  buttonLabel!: string;

  ngOnInit(): void {
    this.snapped = false;
    this.buttonLabel = 'Oh Snap!';
  }

  onAddSnap() {
    if (!this.snapped) {
      this.faceSnap.addSnap();
      this.snapped = true;
      this.buttonLabel = 'Oops, unSnap!';
    } else {
      this.faceSnap.removeSnap();
      this.snapped = false;
      this.buttonLabel = 'Oh Snap!';
    }
  }
}
