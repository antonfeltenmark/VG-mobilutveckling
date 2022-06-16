import * as SQLite from "expo-sqlite";
import Match from "../models/Match";

const db = SQLite.openDatabase("games1.db");
export const initDb = () => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        `CREATE TABLE IF NOT EXISTS gamesHistory2(
                    winner TEXT NOT NULL,
                    date TEXT NOT NULL
                )`,
        [],
        (tx, res) => console.log(res),
        (tx, err) => console.log(err)
      );
    });
  });
};
export const findAll = () => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        `SELECT * FROM gamesHistory2`,
        [],
        (tx, res) =>
          resolve(
            res.rows._array.map(
              (match) => new Match(match.winner, match.date ))
          ),
        (tx, err) => reject(err)
      );
    });
  });
};
export const insert = (match) => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        `INSERT INTO gameshistory2(winner ,date)
                  Values ( ? ,?)`,
        [match.winner, match.date],
        (tx, res) => resolve(res),
        (tx, err) => reject(err)
      );
    });
  });
};

export const deleteTable = () => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        `DELETE FROM gamesHistory2`,
        (tx, res) => resolve(res),
        (tx, err) => reject(err)
      );
    });
  });
};
