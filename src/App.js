import React from "react";
import { useState, useEffect } from "react";
import './App.css'
import searchIcon from './searchIcon.svg';
import Movie from './components/Movie';
import Footer from "./components/Footer";




const API_URL = " https://www.omdbapi.com?apikey=38aad49b";
const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchMovie, setSearch] = useState('');

    const seacrhmovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        seacrhmovies('batman');
    }, [])

    return (
        <div className="app">
            <h1>Moviez Bazaar</h1>
            <Footer />

            <div className="search">
                <input
                    placeholder="seacrh movies.."
                    type="text"
                    value={searchMovie}
                    onChange={(e) => { setSearch(e.target.value) }}
                />

                <img
                    src={searchIcon}
                    alt=""
                    onClick={() => seacrhmovies(searchMovie)}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <Movie movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            No movies found
                        </div>
                    )
            }

        </div>

    );
}

export default App;