import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/Create";
import NowPlaying from "./pages/movie/NowPlaying";
import Popular from "./pages/movie/Popular";
import TopRated from "./pages/movie/TopRated";
import Detail from "./pages/movie/Detail";

// import theme provider
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";


/**
 * Membuat component App
 * component ini menampung component lain
 */
function App() {
  return (
    <div>
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie/create" element={<CreateMovie/>} />
          <Route path="/movie/popular" element={<Popular/>} />
          <Route path="/movie/now" element={<NowPlaying/>} />
          <Route path="/movie/top" element={<TopRated/>} />
          <Route path="/movie/:id" element={<Detail/>} />
        </Routes>
      </Layout>
    </ThemeProvider>

    </div>
  );
}

export default App;
