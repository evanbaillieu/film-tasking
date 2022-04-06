import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Landing() {

    const Navigation = useNavigation();

  return (
    <View>
        <Button title="login" color={"red"} onPress={()=>Navigation.navigate('login')} />
        <Button title="registeur" onPress={()=>Navigation.navigate('registeur')} />
    </View>
  )
}