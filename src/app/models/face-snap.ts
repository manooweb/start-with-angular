import { SnapType } from "./snap-type.type";

export class FaceSnap {
  location?: string;
  id: string;

  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public createdDate: Date,
    public snaps: number) {
      this.id = crypto.randomUUID().substring(0, 8);
    }

    addSnap() {
      this.snaps++;
    }

    removeSnap() {
      this.snaps--;
    }

    setLocation(location: string) {
      this.location = location;
    }

    withLocation(location: string): FaceSnap {
      this.location = location;
      return this;
    }

    snap(FaceSnapType: SnapType) {
      switch (FaceSnapType) {
        case 'snap':
          this.addSnap();
          break;
        case 'unsnap':
          this.removeSnap();
          break;
      }
    }
}
