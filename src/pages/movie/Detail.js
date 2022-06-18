import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import { updateMovie } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoints";


function Detail() {

  const dispatch = useDispatch();

  // Simpan movies (state), id (params), API_KEY ke variable
  const { id } = useParams();

  useEffect(() => {
    getRecommendationMovies();
  }, [id]);

  async function getRecommendationMovies() {   
    const response = await axios(ENDPOINTS.RECOMMENDATION(id));
    dispatch(updateMovie(response.data.results));
    
  }

  return (
    <>
      <DetailMovie />
      <Movies title="Recommendation Movies" />
    </>
  );
}

export default Detail;
