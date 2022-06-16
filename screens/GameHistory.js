import { StyleSheet, View, Text, Pressable } from "react-native";
import RenderGameHistory from "../components/RenderGameHistory";
import { useNavigation } from "@react-navigation/native";
import { deleteTable, findAll } from "../database/localdb";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

const GameHistory = ({ dbInitialized }) => {
  const [matchResult, setMatchResult] = useState([]);
  const nav = useNavigation();

  const isFocused = useIsFocused();

  useEffect(() => {
    findAll().then((res) => {
      setMatchResult(res);
      console.log("res:", res);
    });
  }, [dbInitialized, isFocused]);

  const handleDelete = () => {
    deleteTable()
      .then(() => findAll())
      .then((res) => {
        setMatchResult(res);
      })
      .catch((err) => console.log(err));
    nav.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Game History</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete history</Text>
        </Pressable>
      </View>
      <View style={styles.columnsContainer}>
        <View style={styles.columnsTitles}>
          <Text style={styles.winners}>Winners</Text>
          <Text style={styles.dates}>Date</Text>
        </View>
      </View>
      <Text style={styles.history}>
        <RenderGameHistory matchResult={matchResult} />
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  header: {
    fontWeight: "600",
    color: "darkblue",
    fontSize: 30,
  },
  buttonContainer: {
    padding: 10,
  },
  button: {
    backgroundColor: "red",
    borderRadius: 15,
  },
  buttonText: {
    padding: 5,
  },
  columnsContainer: {
    paddingBottom: 10,
  },
  columnsTitles: {
    flexDirection: "row",
    borderBottomColor: "purple",
    borderTopColor: "pink",
    borderLeftColor: "blue",
    borderRightColor: "yellow",
    borderWidth: 1,
    padding: 5,
  },
  winners: {
    paddingRight: 80,
    paddingLeft: 20,
  },
  dates: {
    paddingRight: 50,
  },
});
export default GameHistory;
