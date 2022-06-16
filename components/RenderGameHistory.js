import { Text, View,FlatList, StyleSheet } from "react-native";

const RenderGameHistory = ({matchResult}) => {

    const _renderItem = ({item : match}) => {
        
        return(
            <View style={styles.container}>
                
                <View style={styles.winners}>
                <Text >{match.winner}</Text>
                </View>
                <View style={styles.dates}>
                    <Text >{match.date}</Text>
                </View>
                
            </View>
        );
    };
    return(
        <FlatList
        data={matchResult}
        renderItem={_renderItem}
        keyExtractor={(item , index) => index}
        inverted={true}
        />
    );
    
}
const styles = StyleSheet.create({
 container : {
     flex: 1,
     flexDirection : 'row',
     justifyContent : 'space-between',
    
     
 } ,
 dates :{
     
     paddingLeft: 20
 }
})

export default RenderGameHistory;