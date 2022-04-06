const config = {
    film:{
        tokken: "b182e564d7b3c5a7b8afd237af0a74fe",
        url: "http://localhost:8080/api/film",
        tmdb: "https://api.themoviedb.org/3/search/movie/",
        apiKey: "92b418e837b833be308bbfb1fb2aca1e",
        lang: "fr-FR",
        size: 5,  
    },
    auth:{
        url:"http://localhost:8080/api/auth",
        singinUrl: "http://localhost:8080/api/auth/signin",
        signupUrl:"http://localhost:8080/api/auth/signup"

    }
}
export default config;
