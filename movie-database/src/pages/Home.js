import { useState } from "react";
import AddMovie from "../components/AddMovie/AddMovie";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";
import data from "../utils/constants/data";

function Main(){
    // Membuat variable state: movie
    const [movies, setMovies] = useState(data);

    return(
        <main>
            <Hero/>
            <Movies movies={movies} setMovies={setMovies}/>
            <AddMovie movies={movies} setMovies={setMovies}/>
        </main>
    );
}

function Home() {
    return(
        <div>
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
    );  
}

export default Home;