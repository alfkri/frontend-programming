import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import {nanoid} from "nanoid";

function Movies(props){

    // destructing props 
    const {movies,setMovies, title} = props;

    // Membuat fungsi untuk menambahkan film
    // dijalankan ketika tombol di klik
    function tambahFilm(){
        const movie = {
            id: nanoid,
            title: "Jakarta vs Everybody",
            year: "2022",
            type: "Movie",
            poster: "https://picsum.photos/300/400",
        };

        // Menambahkan movie ke state movies 
        // sperad operator: copy and merge array
        setMovies([...movies,movie]);
    }
    return(
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>{title}</h2>
                <div className={styles.movie__container}>
                    {/**
                     * Looping data movies: map
                     * Render Component Movie
                     * Kirim props movie
                     */}
                    {
                        movies.map(function(movie){
                            return <Movie key = {movie.id} movie = {movie}/>;
                        })
                    }
                </div>
                <button onClick={tambahFilm}>Add Movie</button>
            </section>
        </div>
    );
}

export default Movies;