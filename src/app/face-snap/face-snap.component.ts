import { Component, inject, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass, TitleCasePipe, DatePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snapped!: boolean;
  buttonLabel!: string;

  snapFaceSnapService = inject(FaceSnapsService);

  ngOnInit(): void {
    this.snapped = false;
    this.buttonLabel = 'Oh Snap!';
  }

  onAddSnap() {
    if (!this.snapped) {
      this.snapFaceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.snapped = true;
      this.buttonLabel = 'Oops, unSnap!';
    } else {
      this.snapFaceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snapped = false;
      this.buttonLabel = 'Oh Snap!';
    }
  }
}
