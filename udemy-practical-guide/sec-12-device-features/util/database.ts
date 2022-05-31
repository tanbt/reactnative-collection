import * as SQLite from "expo-sqlite";
import { Place } from "../models/place";

const database = SQLite.openDatabase("places.db");

export function init(): Promise<any> {
  const promise = new Promise((resolve: any, reject: any) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        imageUri TEXT NOT NULL,
        address TEXT NOT NULL,
        lat REAL NOT NULL,
        lng REAL NOT NULL
      )`,
        [],
        () => resolve(),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
}

export function insertPlace(
  place: Place
): Promise<SQLite.SQLResultSet | SQLite.SQLError> {
  const promise = new Promise<SQLite.SQLResultSet | SQLite.SQLError>(
    (resolve: any, reject: any) => {
      database.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO places(title, imageUri, address, lat, lng) 
      VALUES(?, ? , ? , ? ,?)`,
          [
            place.title,
            place.imageUri,
            place.address,
            place.location.lat,
            place.location.lng,
          ],
          (_, result) => {
            resolve(result);
          },
          (_, error) => reject(error)
        );
      });
    }
  );
  return promise;
}

export function fetchPlaces(): Promise<Place[] | SQLite.SQLError> {
  const promise = new Promise<Place[] | SQLite.SQLError>(
    (resolve: any, reject: any) => {
      database.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM places",
          [],
          (_, result) => {
            const places: Place[] = [];
            for (const dbPlace of result.rows._array) {
              places.push(
                new Place(
                  dbPlace.id,
                  dbPlace.title,
                  dbPlace.imageUri,
                  dbPlace.address,
                  {
                    lat: dbPlace.lat,
                    lng: dbPlace.lng,
                  }
                )
              );
            }
            resolve(places);
          },
          (_, error) => reject(error)
        );
      });
    }
  );
  return promise;
}

export function fetchPlace(id: number): Promise<Place | SQLite.SQLError> {
  const promise = new Promise<Place | SQLite.SQLError>(
    (resolve: any, reject: any) => {
      database.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM places WHERE id=?",
          [id],
          (_, result) => {
            const place = result.rows._array[0];
            if (!place) {
              reject(new Error("Place not found in DB"));
            }
            resolve(
              new Place(place.id, place.title, place.imageUri, place.address, {
                lat: place.lat,
                lng: place.lng,
              })
            );
          },
          (_, error) => reject(error)
        );
      });
    }
  );
  return promise;
}
