import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
import GameHistory from './screens/GameHistory';
import { findAll, initDb} from './database/localdb';
import { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import MainStack from './navigation/MainStack';




export default function App({dbInitialized}) {

  useEffect(() => {
    initDb();
    findAll()
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  },[])

  const BottomTab = createBottomTabNavigator();
  return (
    <NavigationContainer>
     <BottomTab.Navigator screenOptions={{ tabBarShowLabel : true,headerShown: false}} >
       <BottomTab.Screen
       options={{tabBarIcon: () => <Fontisto name="home" size={24} color="black" />}}
       name='Home'
       component={MainStack}/>
       <BottomTab.Screen
       options={{tabBarIcon: () =>  <MaterialIcons name="leaderboard" size={24} color="black" />}}
       name="GameHistory"
       component={GameHistory}
       initialParams={{dbInitialized : dbInitialized}}/>
     </BottomTab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
