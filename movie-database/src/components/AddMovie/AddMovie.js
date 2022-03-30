import styles from "./AddMovie.module.css";
function AddMovie(){
    return(
        <div className={styles.container}>
            <section className={styles.addmovie}>
                <div className={styles.addmovie__left}>
                    <img className={styles.addmovie__image} src="https://picsum.photos/300/300" alt="" />
                </div>
                <div className={styles.addmovie__right}>
                    <div className={styles.addmovie__title}>
                        <h2>Add Movie</h2>
                    </div>   
                    <form>
                        <div className={styles.addmovie__form}>
                            <label className={styles.addmovie__formtitle}>Title</label>
                            <input className={styles.addmovie__forminput} type="text" />
                        </div>
                        <div className={styles.addmovie__form}>
                            <label className={styles.addmovie__formyear}>Year</label>
                            <input className={styles.addmovie__forminput} type="text" />
                        </div>
                        <input className={styles.addmovie__button} type="submit" />
                    </form>
                </div>
            </section>
        </div>
    );
}

export default AddMovie;