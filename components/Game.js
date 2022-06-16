import { useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Match from "../models/Match";
import { findAll, insert } from "../database/localdb";
import { FontAwesome } from "@expo/vector-icons";
import moment from "moment";

const Game = () => {
  const [winner, setWinner] = useState("");
  const [gameList, setGameList] = useState([]);

  const handlePress = (move) => {
    const randomComputerMove = Math.floor(Math.random() * 3) + 1;
    /*  let date = new Date(); 

    let fordate = date.format("MMMM Do YYYY, h:mm:ss"); */
    let date = new Date().toLocaleString();
    let formattedDate = moment().format("MMMM Do YYYY, h:mm a");

   
    //1 = sten , 2 = sax , 3 = påse
    if (move === 1 && randomComputerMove === 2) {
      setWinner("Player won!");
      const match = new Match(winner, formattedDate);
      insert(match)
        .then((res) => {
          console.log("insertres:", res);
          return findAll();
        })
        .then((res) => {
          setGameList(res);
          console.log("res from match:", res);
        });
      
    } 
    
    else if (move === 2 && randomComputerMove === 3) {
      setWinner("Player won!");
      
      const match = new Match(winner, formattedDate);
      insert(match)
        .then((res) => {
          console.log("insertres:", res);
          return findAll();
        })
        .then((res) => setGameList(res));
    } 

    else if (move === 3 && randomComputerMove === 1) {
      setWinner("Player won!");
      const match = new Match(winner, formattedDate);
      insert(match)
        .then((res) => {
          console.log("insertres:", res);
          return findAll();
        })
        .then((res) => setGameList(res));
    } 

    else if (move === randomComputerMove) {
      setWinner("It was a draw!");
      const match = new Match(winner, formattedDate);
      insert(match)
        .then((res) => {
          console.log("insertres:", res);
          return findAll();
        })
        .then((res) => setGameList(res));
    } 
    
    else {
      setWinner("Computer won!");
      const match = new Match(winner, formattedDate);
      insert(match)
        .then((res) => {
          console.log("insertres:", res);
          return findAll();
        })
        .then((res) => setGameList(res));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{winner}</Text>
      <Pressable style={styles.rock} onPress={() => handlePress(1)}>
        <FontAwesome name="hand-rock-o" size={100} color="black" />
      </Pressable>
      <Pressable style={styles.scissors} onPress={() => handlePress(2)}>
        <FontAwesome name="hand-scissors-o" size={100} color="black" />
      </Pressable>
      <Pressable style={styles.paper} onPress={() => handlePress(3)}>
        <FontAwesome name="hand-paper-o" size={100} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  result: {
    color: "aqua",
    fontSize: 30,
    fontWeight: "500",
    borderRadius: 100,
    shadowOpacity: 0.8,
    shadowRadius: 16,
  },
  rock :{
    paddingBottom: 30
  },
  scissors: {
    paddingBottom: 30,
  },
  paper: {
    paddingBottom: 30,
  },
});
export default Game;
