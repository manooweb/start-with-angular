import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
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
        'Mon deuxième snap',
        'Mon deuxième snap description',
        'https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_1280.jpg',
        new Date(),
        0
      ),
      new FaceSnap(
        'Mon troisième snap',
        'Mon troisième snap description',
        'https://cdn.pixabay.com/photo/2022/11/27/13/22/tree-7619791_1280.jpg',
        new Date(),
        0
      )
    ];
    this.faceSnaps[0].setLocation('At home');
  }
}
