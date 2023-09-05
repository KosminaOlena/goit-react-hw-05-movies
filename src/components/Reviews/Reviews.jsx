import { useState, useEffect } from "react";
import {useParams } from "react-router-dom";
import { fetchReviews } from "services/api";
import { Loader } from "components/Loader/Loader";
import {  toast } from 'react-toastify'

const Reviews = () => {
    const [movieReviews, setMovieReviews] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const params = useParams();
    const filmId = params.movieId;

    useEffect(() => {
        if(!filmId)return;
        async function getCast () {
                try{
                  setIsLoading(true);
    
                    const response = await fetchReviews(filmId);
                    setMovieReviews(response.results);

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
            {movieReviews.length !== 0 && (
        <div>
          <ul>
            {movieReviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {movieReviews.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}</div>
    )
}

export default Reviews