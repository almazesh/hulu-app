const api_key = process.env.api_key



export default {
    fetchTrending: {
        title:'Trending',
        url:`/trending/all/week?api_key=${api_key}&language=en-US`
    },
    fetchTopRated: {
        title:'Top Rated',
        url:`/movie/top_rated?api_key=${api_key}&language=en-US`
    },
    fetchActionMovies: {
        title:'Action',
        url:`/discover/movie?api_key=${api_key}&width-genres=28`
    },
    fetchComedyMovies: {
        title:'Comedy',
        url:`/discover/movie?api_key=${api_key}&width-genres=35`
    },
    fetchHorrorMovies: {
        title:'Horror',
        url:`/discover/movie?api_key=${api_key}&width-genres=27`
    },
    fetchRomancesMovies: {
        title:'Romance',
        url:`/discover/movie?api_key=${api_key}&width-genres=10749`
    },
    fetchMystery: {
        title:'Mystery',
        url:`/discover/movie?api_key=${api_key}&width-genres=9648`
    },
    fetchSciFi: {
        title:'Sci-Fi',
        url:`/discover/movie?api_key=${api_key}&width-genres=878`
    },
    fetchWestern: {
        title:'Western',
        url:`/discover/movie?api_key=${api_key}&width-genres=37`
    },
    fetchAnnimation: {
        title:'Animation',
        url:`/discover/movie?api_key=${api_key}&width-genres=16`
    },
    fetchTV: {
        title:'TV Movie',
        url:`/discover/movie?api_key=${api_key}&width-genres=10770`
    },
}