import AsyncStorage from '@react-native-async-storage/async-storage';

export const userkey = "@user_data";

export const getUserStorage = async () =>{
    try{
        const userData = await AsyncStorage.getItem(userkey);
        const user = userData ? JSON.parse(userData) : null;
        return user
    }catch{
        console.log("il ni a pas ide user dans le asyncStorage");
    }
}

export const setUserStorage = async (data) =>{
    try{
        const userData = JSON.stringify(data)
        await AsyncStorage.setItem(userkey, userData)
        console.log("ses set");
    }catch{
        console.log("n'a pas pue etre enregister")
    }
}

export const delUserStorage = async () =>{
    try{
        await AsyncStorage.clear();
    }catch{
        console.log('error');
    }
}