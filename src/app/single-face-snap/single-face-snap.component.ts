import { Component, inject, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass, TitleCasePipe, DatePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    RouterLink,
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe,
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  snapped!: boolean;
  buttonLabel!: string;

  route = inject(ActivatedRoute);
  snapFaceSnapService = inject(FaceSnapsService);

  ngOnInit(): void {
    this.getFaceSnapFromRoute();
    this.prepareFaceSnapUI();
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

  private getFaceSnapFromRoute(): void {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.snapFaceSnapService.getFaceSnapById(faceSnapId);
  }

  private prepareFaceSnapUI(): void {
    this.snapped = false;
    this.buttonLabel = 'Oh Snap!';
  }
}
