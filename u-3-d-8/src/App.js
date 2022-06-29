import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNav from "./components/MyNav";
import Movielist1 from "./components/Movielist1";
import TVShows from "./pages/TVShows";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav title="Netflix" />
        {/* <Movielist1 movieTitle="Batman" /> */}
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/tvshows" element={<TVShows TVShowTitle="Friends" />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/MovieDetails/:movieID" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
