
import React, {useState, useEffect} from 'react'
import { View, Text, SafeAreaView, TextInput,Button, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Boutton from '../components/boutton';
import FilmImage from '../components/filmImage';
import * as filmService from '../service/film.service';
import { getUserStorage } from '../helper/user.storage';
import NoteStar from '../components/noteStar';





const AddFilm = () => {
    
    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");
    const [note, setNote] = useState("");
    const [url, setUrl] = useState("");
    const [persidata, setPersiData] = useState([])
    const { id } = getUserStorage();
    const [isManuel, setIsManuel] = useState(true);
    const navigation = useNavigation();

    const item = (<Text>Save</Text>) 

    const save = async () => {
        const user = await getUserStorage();
        await filmService.create({
            titre: titre,
            description: description,
            note: note,
            url: url,
            userId: user.id
        })
        navigation.navigate('ListFilm');
        
    }

    useEffect(() =>{
        filmService.findbyTitle(titre).then(data =>{
            if(data){  
                console.log(data)
                setPersiData(data)
            }
        }).catch(error => {
            console.log(`message: ${error.message}`);s
        })
    }, [titre])
    

    


    return (
        <SafeAreaView>
            <Text style={styles.text}>Titre :</Text>
            <TextInput onChangeText={setTitre} value={titre} style={styles.input} />
            <Text style={styles.text}>Description :</Text>
            <TextInput onChangeText={setDescription} value={description} style={styles.input}/>
            <Text style={styles.text}>Note sur /10 :</Text>
            <NoteStar note={note} noteMax={5} setNote={setNote}/>
            {isManuel? (<FilmImage data={persidata} url={url} setUrl={setUrl}/>) : (<><Text style={styles.text}>url:</Text><TextInput onChangeText={setUrl} value={url} style={styles.input}/></>)}
            <Button title={(isManuel)?`entres manuelement le lien de l'image`:`voir les image de theMovieDB`} onPress={()=> setIsManuel(state => !state)}/>
            <Boutton item={item} style={styles.button} onPress={save}/>
        </SafeAreaView>
    )
}

export default AddFilm;

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    text: {
        marginLeft: 10,
        marginTop: 10,
    },
    checkbox: {
        width: 64,
        height: 64
    }
  })