import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Mon premier snap',
      'Mon premier snap description',
      'https://cdn.pixabay.com/photo/2019/05/27/00/01/teddy-bear-4231582_1280.jpg',
      new Date(),
      0
    ).withLocation('At home'),
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

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId: string): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return faceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snap: SnapType): void {
    this.getFaceSnapById(faceSnapId).snap(snap);
  }
}
