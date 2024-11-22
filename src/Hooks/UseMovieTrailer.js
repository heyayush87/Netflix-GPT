import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const UseMovieTrailer = (movieid) => {
  const dispatch = useDispatch();
  async function getdata() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
        API_OPTIONS
      );
      if (!response.ok) {
        console.log("Api error");
        return;
      }
      const data = await response.json();
      //   console.log(data);
      const filterdata = data.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterdata.length ? filterdata[0] : data.results;
      //   console.log(trailer);
      dispatch(addTrailer(trailer));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getdata();
  }, []);
  return;
};
export default UseMovieTrailer;
