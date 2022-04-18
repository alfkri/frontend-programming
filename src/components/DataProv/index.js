import styles from "./DataProv.module.css";

function DataProv(props){
    const {data_prov} = props;

    return(
        <tr>
            <td>{data_prov.kota}</td>
            <td>{data_prov.kasus}</td>
            <td>{data_prov.sembuh}</td>
            <td>{data_prov.dirawat}</td>
            <td>{data_prov.meninggal}</td>
        </tr>

    )
}

export default DataProv;