import styles from "./Provinsi.module.css";
import DataProv from "../DataProv";

function Provinsi(props){
    const {data_prov} = props;

    return(
        <div className={styles.container}>
            <section className={styles.provinsi}>
                <div className={styles.provinsi__title}>
                    <h2>Provinsi</h2>
                    <p>Data Covid Berdasarkan Provinsi</p>
                </div>
                <div className={styles.provinsi__content}>
                    <table className={styles.provinsi__table}>
                        <thead>
                            <tr>
                                <th>Provinsi</th>
                                <th>Positif</th>
                                <th>Sembuh</th>
                                <th>Dirawat</th>
                                <th>Meninggal</th>
                            </tr>
                        </thead>   
                        <tbody>       
                            {
                                data_prov.map(function(data_prov){
                                    return <DataProv key = {data_prov.kota} data_prov = {data_prov}/> 
                                })
                            } 
                        </tbody>
                    </table>
                </div>       
            </section>
        </div>
    )
}

export default Provinsi;