 import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../../features/moviesSlice";
import Alert from "../Alert/Alert";
import Button from "../ui/Button";
import styles from "./AddMovie.module.css";


function AddMovie(){
    // buat dispatch
    const dispatch = useDispatch();

    // buat navigasi
    const navigation = useNavigate()

    // Membuat state object formdata
    const [formData, setFormData] =  useState({
        title: "",
        date: "",
        poster: "",
        type: "",
    });

    // Membuat state object input empty
    const [inputEmpty, setInputEmpty] = useState({
        isTitleEmpty: false,
        isDateEmpty: false,
        isPosterEmpty: false,
        isTypeEmpty: false
    });

    // Membuat fungsi handleChange untuk handle semua input form
    function handleChange(e){
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    // Destructing object formData
    const {title, date, poster, type} = formData;

    // Destructing object inputempty
    const {isTitleEmpty, isDateEmpty, isPosterEmpty, isTypeEmpty } = inputEmpty;


    // Fungsi untuk validasi input
    function validate(){
        // Jika title kosong, maka setTitleEmpty true
        if (title == ""){
            setInputEmpty({
                ...inputEmpty,
                isTitleEmpty: true
            });
            return false;
        }
        else if (date == ""){
            setInputEmpty({
                ...inputEmpty,
                isDateEmpty: true,
                isTitleEmpty: false
            });
            return false;
        }
        else if(poster == ""){
            setInputEmpty({
                ...inputEmpty,
                isPosterEmpty: true,
                isDateEmpty: false,
                isTitleEmpty: false
            });
            return false;     
        }   
        else if(type == ""){
            setInputEmpty({
                ...inputEmpty,
                isTypeEmpty: true,
                isDateEmpty: false,
                isPosterEmpty: false,
                isTitleEmpty: false
            });
            return false;
        }
        else{
            setInputEmpty({
                isTitleEmpty: false,
                isDateEmpty: false,
                isPosterEmpty: false,
                isTypeEmpty: false,
            });
            return true;
        }
    }

    function submitMovie(){
        //siapkan data movie
        const movie = {
            id: nanoid(),
            title: title,
            year: date,
            type: type,
            poster: poster,
        };

        dispatch(addMovie(movie));

        navigation("/");
    }

    //Handle form ketika di submit
    function handleSubmit(e){
        // Mencegah default refresh
        e.preventDefault();
        validate() && submitMovie();
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
                            onChange={handleChange}
                            id = "title"
                            name = "title"
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
                            onChange={handleChange}
                            id = "date"
                            name = "date"
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
                            <select className={styles.addmovie__forminput} id="type" name="type" value={type} onChange={handleChange}>
                                <option value="">--Choose here--</option>
                                <option value="movie">Movie</option>
                                <option value="series">Series</option>
                                <option value="animation">Animation</option>
                            </select>
                            {
                                isTypeEmpty && <Alert>Tipe wajib diisi</Alert>
                            }
                        </div>
                        <div className={styles.addmovie__form}>
                            <label className={styles.addmovie__formlabel}>Poster</label>
                            <input 
                            onChange={handleChange}
                            id = "poster"
                            name = "poster"
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
                        <Button variant="info" full>Add Movie</Button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default AddMovie;