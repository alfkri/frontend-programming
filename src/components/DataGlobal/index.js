import styles from "./DataGlobal.module.css";

function DataGlobal(props){
    const {data_ind} = props;

    return (
        <div className={styles.card}>
            <h4>{data_ind.status}</h4>
            <h2>{data_ind.total.toLocaleString()}</h2>
        </div>
    );
}

export default DataGlobal;