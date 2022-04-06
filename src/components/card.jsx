import React from 'react'
import { TouchableOpacity, ImageBackground, Text, StyleSheet } from 'react-native';
import errorImg from '../../assets/Errer.jpeg';

const Card  = ({data, hangle }) => {
    const { titre, url } = data;

    const imgUrl = (url)? {uri: url} : errorImg;
    return(
        <TouchableOpacity onPress={hangle}>
            <ImageBackground source={imgUrl} style={style.contenaire} >
                <Text style={style.text}>{titre}</Text>
            </ImageBackground>
        </TouchableOpacity>
)};

const style = StyleSheet.create({
    contenaire:{
        height: 150,
        width: 200,
        margin:3,
        borderRadius:5,
        flex:1,
        justifyContent: "center",
        alignItems: "center"

    },
    text: {
        height: 150,
        width: 200,
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlignVertical: "center",textAlign: "center",
        backgroundColor: "#00000040"
      }
})

export default Card;