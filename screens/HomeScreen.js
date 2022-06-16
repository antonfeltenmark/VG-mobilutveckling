import {
  Pressable,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/rock-paper-scissors.jpeg")}
        resizeMode="cover"
        style={styles.image}
      >
        <StatusBar style="auto" />

        <View style={styles.buttonContainer}>
          <View
            style={[
              styles.neon,
              { shadowColor: "cyan", backgroundColor: "cyan" },
            ]}
          >
            <Pressable
              onPress={() => {
                navigation.navigate("PlayScreen");
              }}
            >
              <Text
                style={[
                  styles.play,
                  { shadowColor: "white", borderBottomColor: "white" },
                ]}
              ></Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  neon: {
    borderRadius: 100,
    shadowOpacity: 0.8,
    shadowRadius: 16,
    height: 110,
    width: 110,
  },
  play: {
    alignSelf: "center",
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 60,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    shadowOpacity: 0.8,
    shadowRadius: 16,
    transform: [{ rotate: "90deg" }],
    marginTop: 15,
    marginLeft: 35,
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    
    alignItems: "center",
  },
});
export default HomeScreen;
