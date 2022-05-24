import styles from "./Hero.module.css";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import StyledHero from "./Hero.styled";


function Hero() {
  const [movie, setMovie] = useState("");

  async function fetchMovie() {
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
    );

    const data = await response.json();

    setMovie(data);
  }

  useEffect(fetchMovie, []);
  console.log(movie);
  return (
    <StyledHero>
      <Container>
        <section className={styles.hero}>
          <div className={styles.hero__left}>
            <h2>{movie.Title}</h2>
            <h3>{movie.Genre}</h3>
            <p>{movie.Plot}</p>
            <Button variant= "primary">Watch Movie</Button>
          </div>
          <div className={styles.hero__right}>
            <img
              src={movie.Poster}
              alt={movie.Title}
            />
          </div>
        </section>
      </Container>
    </StyledHero>
  );
}

export default Hero;
