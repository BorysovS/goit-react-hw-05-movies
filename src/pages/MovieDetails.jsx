import { MovieCard } from "components/MovieCard/MovieCard";
import { useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { GoBackLink } from "./MovieDetails.styled";

const MovieDetails = () => { 

    const location = useLocation();
    const backlinkLocationRef = useRef(location.state?.from ?? '/movies');

    return (
        <div>
            <GoBackLink to={backlinkLocationRef.current}>Go Back</GoBackLink>
            <MovieCard />
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default MovieDetails