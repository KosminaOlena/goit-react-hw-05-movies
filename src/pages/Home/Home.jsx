
import { useState, useEffect } from "react";
import {  toast } from 'react-toastify';
import { fetchMovieTrend } from "services/api";
import MovieList from "components/MovieList/MovieList";
import { Loader } from "components/Loader/Loader";
import { Container } from "./Home.styled";

const HomePage = () => {

    const [movieTrend, setMovieTrend] = useState([])
    const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
      async function getMovies () {

              try{
                setIsLoading(true);
                const response = await fetchMovieTrend();
                setMovieTrend([...response.results]);

                }catch(error){
                  toast.error('Oops, something went wrong');
                }finally{
                  setIsLoading(false); 
              }
        
      }
      getMovies()
    },[])

    return(
        <Container >
            <h1>Trending today</h1>
            {isLoading && <Loader />}
            <MovieList movies={movieTrend}/>
        </Container >
    );
}
export default HomePage