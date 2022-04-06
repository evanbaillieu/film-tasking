import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { authService } from "../service";
import { useNavigation } from "@react-navigation/native";

export default function Registeur() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
const [message, setMessage] = useState("")

  const navigation = useNavigation();

  const btn = () => (
    <Text>registeur</Text>
  )

  const registeur = async () =>{
    const data = await authService.signup({ username, email, password})
    const {message} = data;
    if (data){
      console.log(data)
      
      navigation.navigate('login', {message})
    }else{

    }

  }

  return (
    <View>
      <Text>username :</Text>
      <TextInput onChangeText={setUsername} value={username} />
      <Text>password :</Text>
      <TextInput onChangeText={setPassword} 
      value={password} />
      <Text>email :</Text>
      <TextInput onChangeText={setEmail} value={email} />
      <Button title="inscription " onPress={()=>registeur()} />
    </View>
  );
}
