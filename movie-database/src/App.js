import "./App.css";
/**
 * Import Component Header
 */
import Header from "./components/Header";
/**
 * Import Component Main
 */
import Main from "./components/Main"
/**
 * Import Component Footer
 */
import Footer from "./components/Footer";

/**
 * Membuat component App
 * component ini menampung component lain
 */
function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
