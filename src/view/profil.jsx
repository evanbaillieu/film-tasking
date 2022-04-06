import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import { delUserStorage, getUserStorage } from '../helper/user.storage'
import Boutton from '../components/boutton'


const Profil = ({setIsConnected}) => {
  const [user, setUser] = useState(null)

  if(!user){
    getUserStorage().then(data =>{
      setUser(data);
    }).catch(err=>{
      console.log(err)
    })
  }

  const item = (<Text>test</Text>);
  const logout = () =>{
    delUserStorage();
    setIsConnected(state => !state)
  }
  return (
    <View>
      <Text>Profile</Text>
      {user && (
        <View>
          <Text>username : {user.username}</Text>
        </View>
      )}
    <Boutton
      onPress={logout}
      item={item}
    />
    </View>
  )
}

export default Profil;