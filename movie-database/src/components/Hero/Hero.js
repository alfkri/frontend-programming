import styles from "./Hero.module.css";

function Hero(){
    return(
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Spiderman</h2>
                    <h3 className={styles.hero__genre}>Genre: Drama, Romance</h3>
                    <p className={styles.hero__description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur velit repudiandae perferendis voluptatum quidem error adipisci reprehenderit nemo accusantium est. </p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__image} 
                    src="https://cdn.cgv.id/uploads/movie/compressed/21021900.jpg" width="300" height="400"alt="" />
                </div>
            </section>
        </div>
    );
}

export default Hero;