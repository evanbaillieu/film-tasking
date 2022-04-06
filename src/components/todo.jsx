import React , {useState} from 'react'
import {  StyleSheet, Text, ImageBackground, View, Image, TouchableOpacity } from 'react-native'
import error from '../../assets/Errer.jpeg';



const Todo = ({item}) => {

    if(item.url){
        return (
                <TouchableOpacity>
                    <Image
                    style={style.image}
                    source={{
                        uri: item.url,
                    }}/>
                </TouchableOpacity>
            )
    }
    return(<TouchableOpacity >
                <ImageBackground source={error} resizeMode="cover" style={style.image}>
                    <Text style={style.text}>{item.titre}</Text>
                </ImageBackground>
            </TouchableOpacity>)
}

export default Todo;

const style = StyleSheet.create({
    image:{
            width: 180,
            height: 135,
            margin: 12
    },
    text: {
        flex:1,
        color: "white",
        borderRadius: 10,
        fontSize: 42,
        textAlign:"center",
        fontWeight: "bold",
        backgroundColor: "#000000a0",
      }
})