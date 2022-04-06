import config from '../config';
import {getUserStorage, setUserStorage} from '../helper/user.storage'

const {auth} = config

export const signin = async (username, password) =>{
    try{
        const data = await fetch(auth.singinUrl,{
            method: 'Post',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: "test",
                password: "test"
            })
        })
        const json = await data.json();
        if(json.user){
            console.log("user set");
            await setUserStorage(json.user)
        }
        return json.user
    }catch(err){
        console.log(err)
        return false
    }
}

export const signup = async (user) =>{
    try{
    const data = await fetch(auth.signupUrl ,{
            method: "post",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        const json = await data.json();
        console.log(json);
        return json
    }catch{
        console.log("na pas pue etre cree");
    }

}