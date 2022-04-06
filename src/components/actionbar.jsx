import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Boutton from './boutton'

export default function actionbar() { 
    const [text, settext] = useState("test");

    const onPress = () => {
        settext("loec")
    }
    

    return (
        <View>
            <Text>{text}</Text>
            <Boutton title="Press" color="#141414"/>
        </View>
    )
}

const styles = StyleSheet.create({})
