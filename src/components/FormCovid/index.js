import { useState } from "react";
import Alert from "../Alert";
import styles from "./FormCovid.module.css";


function FormCovid(props){
    const {data_prov,setData_Prov} = props;

    const [provinsi, setProvinsi] = useState("");

    const [status, setStatus] = useState("");

    const [jumlah, setJumlah] = useState("");

    function handleProvinsi(e){
        setProvinsi(e.target.value);
    }

    function handleStatus(e){
        setStatus(e.target.value);
    }

    function handleJumlah(e){
        setJumlah(e.target.value);
    }

    //Membuat state jika title empty
    const [isProvinsiEmpty, setProvinsiEmpty] = useState(false);

    //Membuat state jika date empty
    const [isStatusEmpty, setStatusEmpty] = useState(false);

    //Membuat state jika poster empty
    const [isJumlahEmpty, setJumlahEmpty] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        
        if (provinsi == ""){
            setProvinsiEmpty(true);
        }
        else if (status == ""){
            setProvinsiEmpty(false);
            setStatusEmpty(true);
        }
        else if(jumlah == ""){
            setProvinsiEmpty(false);
            setStatusEmpty(false);
            setJumlahEmpty(true);
        }
        else{
            const dataprov = {
                provinsi: provinsi,
                status: status,
                jumlah: jumlah 
            }
            setData_Prov([...data_prov]);
    
            console.log(dataprov);
        
            const find_kota = data_prov.findIndex((kota => kota.kota === provinsi));
    
            data_prov[find_kota][status] = jumlah;
    
            console.log("Setelah update: ", data_prov[find_kota]);
        }

    }


    return(
        <div className={styles.container}>
            <section className={styles.covid}>
                <div className={styles.covid__left}>
                    <img className={styles.covid__image} src="https://img.freepik.com/free-vector/flat-vaccination-campaign-illustration_23-2148958754.jpg?t=st=1650289213~exp=1650289813~hmac=876b0630ce4c6b1bcddf3bd6f6b33391bcb4583e3ef67d5cf8c6ff1e665e5f9d&w=740" alt="" />
                </div>
                <div className={styles.covid__right}>
                    <h2 className={styles.covid__title}>Form Covid</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.covid__form}>
                            <label className={styles.covid__formlabel}>Provinsi</label>
                            <select className={styles.covid__forminput} onChange={handleProvinsi}>
                                <option>--Choose here--</option>
                                {
                                    data_prov.map(function(data_prov){
                                    return <option key = {data_prov.kota} value={data_prov.kota}>{data_prov.kota}</option>;
                                    })
                                }
                            </select>
                            {
                                isProvinsiEmpty && <Alert>Provinsi wajib diisi</Alert>
                            }
                        </div>
                        <div className={styles.covid__form}>
                            <label className={styles.covid__formlabel}>Status</label>
                            <select className={styles.covid__forminput} onChange={handleStatus}>
                                <option>--Choose here--</option>
                                <option value="kasus">Positif</option>
                                <option value="sembuh">Sembuh</option>
                                <option value="dirawat">Dirawat</option>
                                <option value="meninggal">Meninggal</option>      
                            </select>
                            {
                                isStatusEmpty && <Alert>Status wajib diisi</Alert>
                            }
                        </div>
                        <div className={styles.covid__form}>
                            <label className={styles.covid__formlabel}>Jumlah</label>
                            <input className={styles.covid__forminput} type="number" onChange={handleJumlah}/>
                            {
                                isJumlahEmpty && <Alert>Jumlah wajib diisi</Alert>
                            }
                        </div>
                        <button className={styles.covid__button}>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default FormCovid;