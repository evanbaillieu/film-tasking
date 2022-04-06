import config from "../config";
import { getUserStorage } from "../helper/user.storage";
const {film} = config;

export const findAll = async () =>{
    
    try{
        const user = await getUserStorage()
        const data = await fetch(`http://localhost:8080/api/film/all/?userId=${user.id}`,{
            method: 'GET',
            credentials: 'include',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }
        });
        const json = await data.json();
        return json
    }catch(err){
        console.log(err)
    }
}

export const findAllCount = async ({pageParam }) =>{
    try {
        const user = await getUserStorage();
        const data = await fetch(film.url + `/?page=${page}&size=${film.size}&userId=${user.id}`)
        const json = await data.json();
        console.log(json)
        return json;
    } catch (error) {
        console.log(error);
    }
}

export const findbyTitle = async (title) =>{
    try{
        const data = await fetch(film.tmdb + `/?page=1&api_key=${film.apiKey}&language=${film.lang}&query=${title}`)
        const json = await data.json();
        return json;
    }catch{
        console.log(error)
    }
}

export const create = async(item) =>{
    console.log(item)
    try{
        const data = await fetch("http://localhost:8080/api/film/",{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        const json = await data.json();
        return json
    }catch(err){
        console.log(err)
    }
}

export const findTitre = async (titre) =>{

    try {
        const data = await fetch("" + titre);
        const json = await data.json();
        return json
    } catch (error) {
        console.log(err)
    }
}

export const findById = async (itemId) =>{
    try{
        const data = await fetch(config.film.url + `/${itemId}`, {method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }})
        const json = await data.json();
        return json
    }catch (error){
        console.log(err)
    }
}