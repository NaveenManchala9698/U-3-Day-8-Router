
import { Component } from "react";
import SingleMovie from "./SingleMovie";
import {Container, Col, Row, Alert} from 'react-bootstrap'
import {SpinnerInfinity} from 'spinners-react'

class Movielist2 extends Component {
    state = {
        movies: [],
        isLoading: true,
        errorMsg: ""
    }
    componentDidMount = () => {
        this.fetchMovies(this.props.movieTitle)
    }

    fetchMovies = async (query) => {
        try {
            const url = `http://www.omdbapi.com/?apikey=b93de60f&s=${query}`

            const getMovies = await fetch(url)

            if (getMovies.ok) {
                const response = await getMovies.json()
                console.log(response)
                this.setState({ movies: response.Search, isLoading: false })
            }
            else {
                const msg = await getMovies.text()
                this.setState({...this.state, isLoading: false, errorMsg: msg })
            }
        }
        catch (error) {
            console.log(error)
            this.setState({...this.state, isLoading: false, errorMsg: "Something Weird Happened!!" })
        }
    }
    render() {
        return (
          <Container>
            <h1 className="text-light">{this.props.movieTitle}</h1>
            <Row className="justify-content-center mt-3">
              {this.state.errorMsg && <Alert variant="danger">{this.state.errorMsg}</Alert>}
              {this.state.isLoading && (<SpinnerInfinity size={70} thickness={163} speed={100} color="rgba(172, 57, 59, 1)" secondaryColor="rgba(57, 95, 172, 0.44)" />)}
            
              {this.state.movies &&
                this.state.movies.slice(0,6).map((movie) => (
                  <Col
                    key={movie.imdbID}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    className="mb-5">
                    <SingleMovie movie={movie} />
                  </Col>
                ))}
            </Row>
          </Container>
        );
      }
   
}

export default Movielist2