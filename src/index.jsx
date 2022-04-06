import React, {useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ListFilm from "./view/ListFilm";
import AddFilm from "./view/addFilm";
import Landing from "./view/landing";
import Login from "./view/login";
import Registeur from "./view/registeur";
import { getUserStorage } from "./helper/user.storage";
import Profil from "./view/profil";
import itemFilm from "./view/itemFilm";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {

  
  const [isConnected, setIsConnected]= useState(false);
  if(!isConnected){
    getUserStorage().then((data) =>{
      if(data){
        console.log(data)
        setIsConnected(state=>!state)
      }
    });
  }
  
  const addfilm=()=>(<><AddFilm /></>);
  const listFilm =()=>(<><ListFilm /></>);
  const profil = () => (<><Profil setIsConnected={setIsConnected}/></>)
  const login = ()=>(<Login setIsConnected={setIsConnected}/>);
  const film =()=> (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="ListFilm" component={ListFilm}/>
        <Stack.Screen name="Item-Film" component={itemFilm}/>
      </Stack.Navigator>
  )
  if(!isConnected){
    return(
      <Stack.Navigator>
        <Stack.Screen name="landing" component={Landing}/>
        <Stack.Screen name="login" component={login}/>
        <Stack.Screen name="registeur" component={Registeur}/>
      </Stack.Navigator>
    )
  }
  
  return (
   <Tab.Navigator>
      <Tab.Screen
        name="ListFilm"
        options={{
          tabBarLabel: "ListFilm",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        component={film}
      />
      <Tab.Screen name="addFilm" 
      options={{
        tabBarLabel: "addFilm",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
      }}component={addfilm} />
      <Tab.Screen name="Profil" 
      options={{
        tabBarLabel: "addFilm",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
      }}component={profil} />
    </Tab.Navigator>
  );
};

export default Main;
