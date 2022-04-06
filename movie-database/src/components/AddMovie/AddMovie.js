import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovie.module.css";


function AddMovie(props){
    //destructing props
    const {movies,setMovies} = props;

    // Membuat state title
    const [title, setTitle] = useState("");

    //Membuat state date
    const [date, setDate] = useState("");

    //Membuat state tipe
    const [tipe, setTipe] = useState("default");

    //Membuat state poster
    const [poster, setPoster] = useState("");

    //Membuat state jika title empty
    const [isTitleEmpty, setTitleEmpty] = useState(false);

    //Membuat state jika date empty
    const [isDateEmpty, setDateEmpty] = useState(false);

    //Membuat state jika poster empty
    const [isPosterEmpty, setPosterEmpty] = useState(false);

    // Membuat fungsi handleTitle 
    function handleTitle(e){
        setTitle(e.target.value);
    }

    // Membuat fungsi handleDate
    function handleDate(e){
        setDate(e.target.value);
    }

    //Membuat fungsi handleTipe
    function handleTipe(e){
        setTipe(e.target.value);
    }

    //Membuat fungsi handlePoster
    function handlePoster(e){
        setPoster(e.target.value);
    }

    //Handle form ketika di submit
    function handleSubmit(e){
        // Mencegah default refresh
        e.preventDefault();

        // Jika title kosong, maka setTitleEmpty true
        if (title == ""){
            setTitleEmpty(true);
        }
        else if (date == ""){
            setTitleEmpty(false);
            setDateEmpty(true);
        }
        else if(poster == ""){
            setPosterEmpty(true);
            setDateEmpty(false);
            setTitleEmpty(false);
        }
        else{
            //siapkan data movie
            const movie = {
                id: nanoid(),
                title: title,
                year: date,
                type: tipe,
                poster: poster,
            };

            setMovies([...movies, movie]);
            setTitleEmpty(false);
            setDateEmpty(false);      
        }
    }


    return(
        <div className={styles.container}>
            <section className={styles.addmovie}>
                <div className={styles.addmovie__left}>
                    <img className={styles.addmovie__image} src="https://picsum.photos/400/500" alt="" />
                </div>
                <div className={styles.addmovie__right}>
                    <div className={styles.addmovie__title}>
                        <h2>Add Movie</h2>
                    </div>   
                    <form onSubmit={handleSubmit}>
                        <div className={styles.addmovie__form}>
                            <label className={styles.addmovie__formlabel}>Title</label>
                            <input  
                            onChange={handleTitle}
                            id = "title"
                            className={styles.addmovie__forminput} 
                            type="text"
                            value={title} 
                            />
                            {/** 
                             * Jika empty title true: muncul error 
                             * jika tidak , munculkan string kosong
                            */}
                            {
                                isTitleEmpty && <Alert>Title wajib diisi</Alert>
                            }
                            
                        </div>
                        <div className={styles.addmovie__form}>
                            <label className={styles.addmovie__formlabel}>Year</label>
                            <input 
                            onChange={handleDate}
                            id = "date"
                            className={styles.addmovie__forminput} 
                            type="number" 
                            value={date}
                            />
                            {/** 
                             * Jika empty title true: muncul error 
                             * jika tidak , munculkan string kosong
                            */}
                            {
                                isDateEmpty && <Alert>Date wajib diisi</Alert>
                            }
                        </div>
                        <div className={styles.addmovie__form}>
                            <label className={styles.addmovie__formlabel}>Tipe</label>
                            <select className={styles.addmovie__forminput} id="tipe" value={tipe} onChange={handleTipe}>
                                <option>--Choose here--</option>
                                <option value="movie">Movie</option>
                                <option value="series">Series</option>
                                <option value="animation">Animation</option>
                            </select>
                        </div>
                        <div className={styles.addmovie__form}>
                            <label className={styles.addmovie__formlabel}>Poster</label>
                            <input 
                            onChange={handlePoster}
                            id = "poster"
                            className={styles.addmovie__forminput} 
                            type= "text" 
                            value={poster}
                            />
                            {/** 
                             * Jika empty poster true: muncul error 
                             * jika tidak , munculkan string kosong
                            */}
                            {
                                isPosterEmpty && <Alert>Link poster wajib diisi</Alert>
                            }
                        </div>
                        <button className={styles.addmovie__button}>Add Movie</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default AddMovie;
