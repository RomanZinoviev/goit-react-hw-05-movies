import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

 const Reviews = () => {    
    const [reviews, setReviews] = useState(null);  
    const {movieId} = useParams();

    const API_GET = "https://api.themoviedb.org/3/movie/";
    const API_KEY = "04e9412e8b51c89a88481cdeb7f8adec";    
    
    const getReviews = (movieId) => {
        axios.get(`${API_GET}${movieId}/reviews?api_key=${API_KEY}`).then(res => {            
            setReviews(res.data.results);             
        }).catch(err => console.log(err))
    };
    useEffect(() => {
        if(!movieId){return}
        getReviews(movieId);
    }, [movieId]);
    if (reviews) {
        return (
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <p>Review name: {review.author}</p>
                        <p>{review.content}</p>                        
                    </li>
                ))}
            </ul>
        )
    }
};
export default Reviews;