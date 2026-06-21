import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        'Mon premier snap',
        'Mon premier snap description',
        'https://cdn.pixabay.com/photo/2019/05/27/00/01/teddy-bear-4231582_1280.jpg',
        new Date(),
        0
      ),
      new FaceSnap(
        'Mon Deuxième Snap',
        'Mon deuxième snap description',
        'https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_1280.jpg',
        new Date(),
        200
      ),
      new FaceSnap(
        'Mon Troisième Snap',
        'Mon troisième snap description',
        'https://cdn.pixabay.com/photo/2022/11/27/13/22/tree-7619791_1280.jpg',
        new Date(),
        0
      )
    ];
    this.faceSnaps[0].setLocation('At home');
  }
}
