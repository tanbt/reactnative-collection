import * as SQLite from "expo-sqlite";

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
