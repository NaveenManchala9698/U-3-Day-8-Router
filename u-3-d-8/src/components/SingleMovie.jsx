
import { Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const SingleMovie = ({ movie }) => {

    const navigate = useNavigate()

    const showDetails = () => {
        navigate('/MovieDetails/' + movie.imdbID)
    }
    
    return (
        <Card id="movie-card">
            <Card.Img variant="top" src={movie.Poster} />
            <Card.Body id="movie-text">
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>
                    {movie.Year}
                </Card.Text>
                <button onClick={showDetails}>Details</button>
            </Card.Body>
        </Card>
    )
}


export default SingleMovie