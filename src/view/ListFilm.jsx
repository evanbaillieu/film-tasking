
import { useInfiniteQuery, useQuery } from 'react-query'
import { View,ActivityIndicator, Text, SafeAreaView, ScrollView, StyleSheet , TouchableOpacity} from 'react-native';
import React from 'react';
import Card from '../components/card';

import * as filmService from '../service/film.service';
import { useNavigation } from '@react-navigation/native';


export default function ListFilm() {

  const navigation = useNavigation();
  const { isLoading, isError, data, error } = useQuery('list-film', filmService.findAll)

  if( isLoading ){
    return(
      <>
        <View style={styles.containspinner}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </>
      
    )
  }

  if( isError ){
    return(
      <View>
        <Text>error: {error.message}</Text> 
      </View>
    )
  }

  if( data.message ){
    return (
      <View>
        <Text>message : {data.message}</Text>
      </View>
    )
  }

  console.log(data);
 
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <View style={styles.scrollView}>
              
              {data && data.map(movie =>(
                <Card data={movie} key={movie.id} hangle={() => navigation.navigate('Item-Film', {itemId: movie.id})}/>
              ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  containspinner:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});
