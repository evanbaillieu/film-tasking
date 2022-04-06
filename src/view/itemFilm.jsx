import { View, Text, Button, Image, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import * as filmService from '../service/film.service';
import errorImg from '../../assets/Errer.jpeg';
import NoteStar from '../components/noteStar';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function ItemFilm({route, navigation}) {

  const [film, setFilm] = useState({})
  const {itemId}= route.params;
 
        filmService.findById(itemId).then(data=>{
            if(data){
                setFilm(data);
            }
            console.log(data);
        }).catch(err=>{
            console.log(err)
        })
  
        const imgUrl = (film.url)? {uri: film.url} : errorImg;

  return (
    <View>
      <Image source={imgUrl} style={style.img} />
      <View>
          <Text style={style.titre}>Titrre: {film.titre}</Text>
      </View>
      <View>
            <Text style={style.description}>Avis : {film.description}</Text>  
      </View>
      <NoteStar note={film.note} noteMax={5}  disable/>
      <View style={style.btn}>
        <Button title="Go back"  onPress={() => navigation.goBack()} />
      </View>
      
    </View>
  )
}

const style = StyleSheet.create({
   img:{
       width: '100%',
       height:250
   },
   titre:{
       fontSize: 32,
       textAlign:"center",
       padding:20,
       borderColor:"black",
       borderWidth: 3
   },
   description:{
    fontSize: 18,
    height: 150
   }
})
