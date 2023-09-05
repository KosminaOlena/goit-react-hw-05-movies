
import { Link, NavLink, useLocation, useParams,Outlet } from "react-router-dom";
import { useState, useEffect, useRef  } from "react";
import { fetchMovieDetails } from "services/api";
import { Loader } from "components/Loader/Loader";
import {  toast } from 'react-toastify';
import { Container, Section, List, Item, Aside, NavBar, AddInfo, Button } from "./MovieDetails.styled";

const MovieDetails = () => { 
  const [movieDetail, setMovieDetail] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const params = useParams();
  const filmId = params.movieId;

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/')

  useEffect(() => {
    if(!filmId)return;
    async function getMoviesDetails () {

            try{
              setIsLoading(true);

                const response = await fetchMovieDetails(filmId);
                  setMovieDetail(response);

              }catch(error){
                toast.error('Oops, something went wrong');
              }finally{
                setIsLoading(false); 
            }
      
    }
    getMoviesDetails()
  },[filmId])
  
  const {original_title, overview, release_date, genres, poster_path, vote_average} = movieDetail||{}
  const urlPoster = `https://image.tmdb.org/t/p/w500${poster_path}`
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
  
    return(
      
    <>
      {isLoading && <Loader />}
      {movieDetail &&
      <div>
        <Aside>
          <Link to={backLink.current}>
           <Button type="button">Go back</Button>
          </Link>
        </Aside>

        <Container>
        <img src= {poster_path?urlPoster:defaultImg} alt="poster" width={250}/>
        <Section>
        <h1>{`${original_title}(${release_date.slice(0,4)})`}</h1>
            <p>{`User Score: ${vote_average.toFixed(1)*10}%`}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <List>{
              genres.map(genre => <Item key={genre.id}>{genre.name}</Item>)}
            </List>
        </Section>
        </Container>
        <AddInfo>
          <h3>Additional infomation</h3>
            <NavBar>
              <NavLink to="cast" >Cast</NavLink>
              <NavLink to="reviews">Reviews</NavLink>
            </NavBar>
            
        </AddInfo>
        <Aside>
           <Outlet />
        </Aside>
      </div>}
    </>
    );
}
export default MovieDetails
