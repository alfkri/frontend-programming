import axios from "axios";
import { useEffect, useState } from "react";
import AddMovie from "../../components/AddMovie/AddMovie";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";


function NowPlaying(){

    // Membuat state movies
    const [movies, setMovies] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    // Membuat fungsi getNowPlayingMovies: mengambil movies now playing
    async function getNowPlayingMovies(){
        // Fetch data dari axios
        const response = await axios(ENDPOINTS.NOWPLAYING);

        // simpan data ke state movie
        setMovies(response.data.results);
    }
    
    console.log(movies);

    return (
        <>
            <Hero/>
            <Movies movies={movies} title="Now Playing Movies"/>
            <AddMovie/>
        </>
    );
} 

export default NowPlaying;