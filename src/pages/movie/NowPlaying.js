import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddMovie from "../../components/AddMovie/AddMovie";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovie } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoints";


function NowPlaying(){
    const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    // Membuat fungsi getNowPlayingMovies: mengambil movies now playing
    async function getNowPlayingMovies(){
        // Fetch data dari axios
        const response = await axios(ENDPOINTS.NOWPLAYING);

        // simpan data ke state movie
        dispatch(updateMovie(response.data.results));
    }
    
    
    return (
        <>
            <Hero/>
            <Movies title="Now Playing Movies"/>
            <AddMovie/>
        </>
    );
} 

export default NowPlaying;