import styles from "./Global.module.css";
import data from "../../utils/constants/indonesia";
import DataGlobal from "../DataGlobal";



function Global(){
    const global = data.indonesia;
    return(
        <div className={styles.container}>
            <section className={styles.global}>
                <div className={styles.global__title}>
                    <h2>Indonesia</h2>
                    <p>Data Covid Berdasarkan Global</p>
                </div>
                <div className={styles.global__container}>
                    {
                        global.map(function(data_ind){
                            return <DataGlobal key = {data_ind.status} data_ind = {data_ind}/> 
                        })
                    }
                </div>
            </section>
        </div>
    );
}

export default Global;