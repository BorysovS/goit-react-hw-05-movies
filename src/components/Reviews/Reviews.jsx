import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { getReviewMovie } from "services/fetchApiFilm";

const Reviews = () => { 
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (!movieId) {
            return
        };
        async function getRiviews() { 
            try {
                const reviewsInfo = await getReviewMovie(movieId)
                setReviews(reviewsInfo.results)
            } catch (error) {
             console.log(error.message);   
            }
        }

        getRiviews()
    }, [movieId])

    

    return (
    <>
            {reviews.length < 1 && <div>We dont have any reviews for this movie...</div>}
            {reviews.map(item => (
                <li ket={item.id}>
                    <h1>Author: {item.author}</h1>
                    <p>{ item.content}</p>
              </li>  
            ))}
    </>
    )
}

export default Reviews