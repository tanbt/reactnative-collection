import { LatLng } from "react-native-maps";

export class Place {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly imageUri: string,
    public readonly address: string,
    public readonly location: LatLng
  ) {}

  public static fromDbEntity(place: any): Place {
    return new Place(place.id, place.title, place.imageUri, place.address, {
      latitude: place.latitude,
      longitude: place.longitude,
    });
  }
}
