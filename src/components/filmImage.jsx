import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground,
    TextInput, 
    Image,
    TouchableOpacity
 } from 'react-native';
 import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React, {useState, useEffect} from 'react';
import * as filmService from "../service/film.service";
import errorImg from '../../assets/Errer.jpeg';
import Check from '../../assets/Check.svg'





export default function FilmImage({isActive, data, setUrl, url}) {
    const [isInput, setIsInput] = useState(true)
    if(isActive){
        return(
            <Text>entre un nom</Text>
        )
    }
    
  return (
    <View>
        <Text>choisi ton image : </Text>
      <ScrollView showsHorizontalScrollIndicator={false}
                      horizontal={true} style={style.contenaire}>
        {isInput?(
            <>
                {data.results && data.results.map((item, index) => {
                    const imgUrl = (item.backdrop_path)?`https://image.tmdb.org/t/p/w300${item.backdrop_path}`: null;
                    return(
                        <TouchableOpacity onPress={() => setUrl(imgUrl)}>
                            <ImageBackground style={style.image} key={index} source={(item.backdrop_path)?{uri: imgUrl}: errorImg}>
                               {(imgUrl == url)?(<View style={{height: 120, width: 150, backgroundColor: "#00000040", justifyContent: "center", alignItems: "center"}}><MaterialCommunityIcons name="check" size={60} color={"#00ff00"} /></View>):(<></>)}
                            </ImageBackground>  
                        </TouchableOpacity>
                    )}
                )}
            </>
        ):(
            <>
             <TextInput onChangeText={(value) => setUrl(value)} value={url}/>
            </>
        )}
        
      </ScrollView>
    </View>
  );
}


const style = StyleSheet.create({
    contenaire:{
        flexDirection: "row"
    },
    image:{
        width: 150,
        height: 120,
        margin: 12
    },
    imageSelected:{
        backgroundColor: "#14141405"
    }
})