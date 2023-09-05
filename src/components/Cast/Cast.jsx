import { useState, useEffect } from "react";
import {useParams } from "react-router-dom";
import {  toast } from 'react-toastify';
import { fetchCredits } from "services/api";
import { Loader } from "components/Loader/Loader";
import { Text, Item} from "./Cast.styled";

const Cast = () => {
    const [movieCast, setMovieCast] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const params = useParams();
    const filmId = params.movieId;

    useEffect(() => {
        if(!filmId)return;
        async function getCast () {
                try{
                  setIsLoading(true);
                    const response = await fetchCredits(filmId);
                     setMovieCast(response.cast);
                  }catch(error){
                    toast.error('Oops, something went wrong');
                  }finally{
                    setIsLoading(false); 
                }  
        }
        getCast()
      },[filmId])

    return(
        <div>
            {isLoading && <Loader />}
            {movieCast&&
            <ul>
                {movieCast.map(actor => <Item key={actor.id}>
                  <img src={
                    actor.profile_path?`https://image.tmdb.org/t/p/w500${actor.profile_path}`:
                    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
                  } alt={actor.name} width={150}/>
                  <Text>{actor.name}</Text>
                  <Text>{`Character: ${actor.character}`}</Text>
                  </Item>)}
            </ul>}
            


            
            
        </div>
    )
}

export default Cast