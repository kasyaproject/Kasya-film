import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_BASEURL;

export const getMovieTrending = async () => {
  const trending = await axios.get(
    `${process.env.REACT_APP_BASEURL}/discover/movie?language=en-US&page=1&sort_by=title.asc`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    }
  );
  console.log({ MovieTrending: trending });

  //   return trending.data;
};

export const getMovieList = async () => {
  const movie = await axios.get(
    `${apiUrl}/discover/movie/popular?api_key=${apiKey}`
  );
  console.log({ MovieList: movie });
  //   return movie.data;
};
