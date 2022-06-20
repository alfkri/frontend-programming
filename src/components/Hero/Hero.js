import styles from "./Hero.module.css";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import StyledHero from "./Hero.styled";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";


function Hero() {
  // Membuat state movie
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(getDetailMovie, []);

  //mendapatkan 1 data dari trending movies
  async function getTrendingMovies(){
//     const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(ENDPOINTS.TRENDING);
    return response.data.results[0];
  }

  //membuat fungsi untuk mendapatkan detail movie
  async function getDetailMovie(){
    // Ambil 1 data trending movie, lalu ambil id-nya
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;

    // Fetch detail movie berdasarkan id
//     const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=303ee6297bf6c92a68bd6c6ce6d6a690&append_to_response=videos`;
    const response = await axios(ENDPOINTS.DETAIL(id));
   
    setMovie(response.data);
    
  }
  

  return (
    <StyledHero>
      <Container>
        <section className={styles.hero}>
          <div className={styles.hero__left}>
            <h2>{movie.title}</h2>
            <h3>{genres}</h3>
            <p>{movie.overview}</p>
            <Button variant= "primary" as="a" href={trailer} target="_blank">Watch Trailer</Button>
          </div>
          <div className={styles.hero__right}>
            <img
              src= {movie && `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.title}
            />
          </div>
        </section>
      </Container>
    </StyledHero>
  );
}

export default Hero;
