
import { View , StyleSheet ,Dimensions} from 'react-native';
import Game from "../components/Game";

const PlayScreen = () => {

    return(
        <View style={styles.container}>
            <Game/>
        </View>
    )
}
const styles = StyleSheet.create({
    container :{
        alignItems : "center",
        justifyContent: "center",
        flex: 1 ,
        backgroundColor: 'lightblue'
    },
    image:{
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    }
})

export default PlayScreen;