type Location = {
  lat: number;
  lng: number;
};

export class Place {
  public readonly id: string;

  constructor(
    public readonly title: string,
    public readonly imageUri: string,
    public readonly address: string,
    public readonly location: Location
  ) {
    this.id = new Date().toString() + Math.random().toString();
  }
}
