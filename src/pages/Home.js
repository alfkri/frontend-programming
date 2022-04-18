import Footer from "../components/Footer";
import Global from "../components/Global";
import Provinsi from "../components/Provinsi";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import FormCovid from "../components/FormCovid";
import { useState } from "react";
import data from "../utils/constants/provinces";


function Main() {
  const [data_prov, setData_Prov] = useState(data.provinces);

  return (
    <main>
      <Hero />
      <Global/>
      <Provinsi data_prov = {data_prov} setData_Prov={setData_Prov}/>
      <FormCovid data_prov = {data_prov} setData_Prov={setData_Prov}/>
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
