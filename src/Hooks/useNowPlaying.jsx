import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useNowPlaying =()=>{
    const dispatch = useDispatch();
    const getNowPlayingmovies=async()=>{
     const data=await fetch('https://api.themoviedb.org/3/movie/now_playing')
       const json=await data.json();
       dispatch(addNowPlayingMovies(json.results));
    }
    
    useEffect( ()=>{
      getNowPlayingmovies();
    },[])
}
export default useNowPlaying;