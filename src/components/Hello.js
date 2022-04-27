
/**
 * Membuat component Hello.
 * Component Hello menerima inputan: props.
 *
 */
function Hello(props) {
  // Melakukan destructing props (object)
  const { name } = props;

  return (
    <div className="hello">
      <h2>Hello React</h2>
      <img src={require('./foto.jpg')} alt="foto" width="140" height="200"/>
      <p>Saya {name}</p>
      <p>Saya merupakan Mahasiswa Semester 4 Teknik Informatika STT Nurul Fikri</p>
      <p>Tempat Tanggal Lahir: Jakarta, 28 Januari 2001</p>
      <p>Alamat: Depok</p>
    </div>
  );
}

export default Hello;
