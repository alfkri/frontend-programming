import { useState } from "react";
import AddMovie from "../components/AddMovie/AddMovie";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import data from "../utils/constants/data";



function Home() {
    // Membuat variable state: movie
    const [movies, setMovies] = useState(data);

    return(
        <>
            <Hero/>
            <Movies movies={movies} setMovies={setMovies}/>
            <AddMovie movies={movies} setMovies={setMovies}/>
        </>
    );  
}

export default Home;