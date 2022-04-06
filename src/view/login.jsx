import { View, Text,StyleSheet, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as authService from '../service/auth.service'

export default function Login({setIsConnected}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const [user, setUser] = useState({})

    const login =  async () =>{
        const data =    await authService.signin(username, password)
        if(data){
          console.log(data)
          setUser(data);
          setIsConnected(true);
        }
        
    }
  
  return (
    <View styles={styles.contenaire}>

      <Text>username :</Text>
      <TextInput autoCapitalize={'none'} onChangeText={setUsername} styles={styles.input} value={username}/>
      <Text>password :</Text>
      <TextInput autoCapitalize={'none'} onChangeText={setPassword} styles={styles.input} value={password}/>
      <Button title="login" onPress={()=>login()}/>
    </View>
  )
}

const styles = StyleSheet.create({
      contenaire:{
        width:400,
        flex:1,
        backgroundColor:"green"
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})
