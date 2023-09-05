import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { Item, TrendList } from "./MovieList.styled"

const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
        <TrendList>
            {movies.map(movie => (
                <Item key={movie.id}><Link to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</Link></Item>
            ))}
        </TrendList>
    )
}

export default MovieList


MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired
        }).isRequired)}