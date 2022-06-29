
import { useState } from "react";
import SingleMovie from "./SingleMovie";
import { Container, Col, Row} from 'react-bootstrap'
import { SpinnerRoundOutlined } from 'spinners-react'
import { useEffect } from "react";

const Movielist1 = ({movieTitle}) => {
    /* state = {
        movies: [],
        isLoading: true,
         searchQuery: ""
    } */

    const [movies, setMovies] = useState(null)

    const [isLoading, setIsLoading] = useState(true)

    /* componentDidMount = () => {
        this.fetchMovies(this.props.movieTitle)
    } */

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async () => {
        try {
            const url = "http://www.omdbapi.com/?apikey=b93de60f&s=" + movieTitle

            const getMovies = await fetch(url)

            if (getMovies.ok) {
                const response = await getMovies.json()
                console.log(response)
                /* this.setState({ movies: response.Search, isLoading: false }) */

                setMovies(response.Search)
                setIsLoading(false)
            }
            else {
                alert("Error!!")
                setIsLoading(false)
            }
        }
        catch (error) {
            console.log(error)
            setIsLoading(false)

        }
    }


        return (
            <Container>

               {/*  <Row>
                    <Col md={12} className="mt-3">
                        <Form>
                            <Form.Group controlId="formBasicEmail">

                                <Form.Control type="text" placeholder="Search Movies" value={this.state.searchQuery} onChange={(e) => {
                                    this.setState({ searchQuery: e.target.value })
                                }
                                } />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row> */}


                <h1 className="text-light text-center">{movieTitle} Movies</h1>
                <Row className="justify-content-center mt-3">

                    {isLoading && (<SpinnerRoundOutlined size={70} thickness={163} speed={100} color="rgba(172, 57, 59, 1)" />)}


                    {movies && movies.slice(0, 6).map(movie => (

                        <Col key={movie.imdbID} sm={6} md={4} lg={2} className="text-center">
                            <SingleMovie movie={movie} />
                        </Col>

                    ))}
                </Row>
            </Container>
        )

    }

export default Movielist1