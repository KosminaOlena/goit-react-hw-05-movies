import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {  toast } from 'react-toastify';
import { fetchSearchMovies } from "services/api";
import { Loader } from "components/Loader/Loader";
import Form from "components/Form/Form";
import MovieList from "components/MovieList/MovieList";
import { Container } from "./Movies.styled";

const MoviesPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const searchName = searchParams.get('query');

    const [movieSerch, setMovieSerch] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = queryValue =>{
        setSearchParams({
            query:queryValue
        })
    }

    useEffect(() => {
        if(!searchName)return;
        async function getSerch () {
    
                try{
                  setIsLoading(true);
                    const response = await fetchSearchMovies(searchName);
                    if (response.results.length === 0 || !response.results){
                      return toast.error('Sorry, movies not found')
                    }
                    setMovieSerch(response.results);
                  }catch(error){
                    toast.error('Oops, something went wrong');
                  }finally{
                    setIsLoading(false); 
                }
          
        }
        getSerch()
      },[searchName])

    return(
        <Container>
            <Form onSubmit={onSubmit}/>

            {isLoading && <Loader />}
            <MovieList movies={movieSerch}/>

        </Container>
    );
}
export default MoviesPage