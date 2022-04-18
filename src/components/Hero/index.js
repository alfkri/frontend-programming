import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>COVID ID</h2>
          <h3 className={styles.hero__subtitle}>Monitoring Perkembangan Covid</h3>
          <p className={styles.hero__description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, nihil? Ab fugit quas aliquam laborum vel delectus aut dicta. Recusandae!</p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className={styles.hero__right}>
          <img className={styles.hero__image} src="https://img.freepik.com/free-vector/vaccine-concept-illustration_114360-5361.jpg?t=st=1649950752~exp=1649951352~hmac=10af65241c269420da15a3a2c5a22f4c2c4f0f36141b16547827231dd1d5cb80&w=740" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
