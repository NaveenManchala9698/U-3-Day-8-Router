import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const params = useParams();
  console.log("PARAMS", params);
  const movieID = params.movieID;

  useEffect(() => {
    /* let correctMovie = movies.find((movie) => movie.imdbID === movieID)
        console.log('CorrectMovie, correctMovie') */
    fetchmovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchmovieDetails = async () => {
    try {
      const url = "http://www.omdbapi.com/?apikey=b93de60f&i=" + movieID;

      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSelectedMovie(data)
      } else {
        console.log("Errrrror!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="text-center text-light">
         <h2 className="text-light text-center">Movie details here!</h2>
        {selectedMovie && (
        <>
        <h1>{selectedMovie.Title}</h1>
        <p>{selectedMovie.Released}</p>
        <p>{selectedMovie.Runtime}</p>
        <p>{selectedMovie.Awards}</p>
        </>
        )}
    </div>
  );
};

export default MovieDetails;
