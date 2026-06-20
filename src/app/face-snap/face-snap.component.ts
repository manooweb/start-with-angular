import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapped!: boolean;
  buttonLabel!: string;

  ngOnInit(): void {
    this.title = 'Mon premier snap';
    this.description = 'Mon premier snap description';
    this.createdAt = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://media.istockphoto.com/id/909772496/fr/photo/ours-en-peluche-brun-isol%C3%A9-devant-un-fond-blanc.jpg?s=612x612&w=0&k=20&c=0ONAqN7He2ac1a3iyzlMcKIJnI8dtKiRsbeeecMm1d8=';
    this.snapped = false;
    this.buttonLabel = 'Oh Snap!';
  }

  onAddSnap() {
    if (!this.snapped) {
      this.snaps++;
      this.snapped = true;
      this.buttonLabel = 'Oops, unSnap!';
    } else {
      this.snaps--;
      this.snapped = false;
      this.buttonLabel = 'Oh Snap!';
    }
  }
}
