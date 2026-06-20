export class FaceSnap {
  location?: string;

  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public createdDate: Date,
    public snaps: number) { }

    addSnap() {
      this.snaps++;
    }

    removeSnap() {
      this.snaps--;
    }

    setLocation(location: string) {
      this.location = location;
    }
}
