import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/Create";
import NowPlaying from "./pages/movie/NowPlaying";
import Popular from "./pages/movie/Popular";
import TopRated from "./pages/movie/TopRated";

/**
 * Membuat component App
 * component ini menampung component lain
 */
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie/create" element={<CreateMovie/>} />
          <Route path="/movie/popular" element={<Popular/>} />
          <Route path="/movie/now" element={<NowPlaying/>} />
          <Route path="/movie/top" element={<TopRated/>} />
        </Routes>
      </Layout>

    </div>
  );
}

export default App;
