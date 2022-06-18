import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AddMovie from "../../components/AddMovie/AddMovie";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovie } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoints";


function TopRated(){

    const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getTopRatedMovies();
    }, []);

    // Membuat fungsi getTopRatedMovies: mengambil movies top rated
    async function getTopRatedMovies(){
        // Fetch data dari axios
        const response = await axios(ENDPOINTS.TOPRATED);

        dispatch(updateMovie(response.data.results));
        
    }
    

    return (
        <>
            <Hero/>
            <Movies title="Top Rated Movies"/>
            <AddMovie/>
        </>
    );
} 

export default TopRated;