import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddMovie from "../../components/AddMovie/AddMovie";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovie } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoints";


function Popular(){
    const dispatch = useDispatch();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getPopularMovies();
    }, []);

    // Membuat fungsi getPopularMovies: mengambil movies populer
    async function getPopularMovies(){
        // Fetch data dari axios
        const response = await axios(ENDPOINTS.POPULAR);

        dispatch(updateMovie(response.data.results));
    }
    

    return (
        <>
            <Hero/>
            <Movies title="Popular Movies"/>
            <AddMovie/>
          
        </>
    );
} 

export default Popular;