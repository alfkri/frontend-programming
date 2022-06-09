import axios from "axios";
import { useEffect, useState } from "react";
import AddMovie from "../../components/AddMovie/AddMovie";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";


function TopRated(){

    // Membuat state movies
    const [movies, setMovies] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getTopRatedMovies();
    }, []);

    // Membuat fungsi getTopRatedMovies: mengambil movies top rated
    async function getTopRatedMovies(){
        // Fetch data dari axios
        const response = await axios(ENDPOINTS.TOPRATED);

        // simpan data ke state movie
        setMovies(response.data.results);
    }
    
    console.log(movies);

    return (
        <>
            <Hero/>
            <Movies movies={movies} title="Top Rated Movies"/>
            <AddMovie/>
        </>
    );
} 

export default TopRated;