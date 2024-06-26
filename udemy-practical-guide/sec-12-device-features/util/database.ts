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
        latitude REAL NOT NULL,
        longitude REAL NOT NULL
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
          `INSERT INTO places(title, imageUri, address, latitude, longitude) 
      VALUES(?, ? , ? , ? ,?)`,
          [
            place.title,
            place.imageUri,
            place.address,
            place.location.latitude,
            place.location.longitude,
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
              places.push(Place.fromDbEntity(dbPlace));
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
            const dbPlace = result.rows._array[0];
            if (!dbPlace) {
              reject(new Error("Place not found in DB"));
            }
            // simulate delay fetching
            setTimeout(() => resolve(Place.fromDbEntity(dbPlace)), 1000);
          },
          (_, error) => reject(error)
        );
      });
    }
  );
  return promise;
}

export function deletePlace(id: number): Promise<boolean | SQLite.SQLError> {
  const promise = new Promise<boolean>((resolve: any, reject: any) => {
    database.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM places WHERE id=?`,
        [id],
        () => setTimeout(() => resolve(true), 500),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
}
