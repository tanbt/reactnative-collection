type Location = {
  lat: number;
  lng: number;
};

export class Place {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly imageUri: string,
    public readonly address: string,
    public readonly location: Location
  ) {}
}
