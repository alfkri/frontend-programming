import axios from "axios";
import { useEffect, useState } from "react";
import AddMovie from "../../components/AddMovie/AddMovie";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";


function Popular(){

    // Membuat state movies
    const [movies, setMovies] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getPopularMovies();
    }, []);

    // Membuat fungsi getPopularMovies: mengambil movies populer
    async function getPopularMovies(){
        // Fetch data dari axios
        const response = await axios(ENDPOINTS.POPULAR);

        // simpan data ke state movie
        setMovies(response.data.results);
    }
    
    console.log(movies);

    return (
        <>
            <Hero/>
            <Movies movies={movies} title="Popular Movies"/>
            <AddMovie/>
          
        </>
    );
} 

export default Popular;