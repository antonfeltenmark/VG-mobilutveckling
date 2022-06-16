import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlayScreen from "../screens/PlayScreen";
import HomeScreen from "../screens/HomeScreen";


const MainStack = () => {

    const StackNavigation = createNativeStackNavigator();

    return(
     <StackNavigation.Navigator>
         <StackNavigation.Screen
         name="HomeScreen"
         component={HomeScreen}/>
         <StackNavigation.Screen
         name="PlayScreen"
         component={PlayScreen}/>
     </StackNavigation.Navigator>
    )
}
export default MainStack;