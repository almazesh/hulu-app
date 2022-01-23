import React from 'react';
import {BiLike} from 'react-icons/bi'
export default function Card({result}) {
    const base = "https://image.tmdb.org/t/p/original";
    return (
        <div className='card'>
            <img 
            src={
                `${base}${result.backdrop_path || result.poster_path}` || 
                `${base}${result.poster_path}`
            }
            />
           <div className='card-body'>
                <h2>{result.title || result.original_name}</h2>

                <p>
                    {result.overview}
                </p>
                <p>
                    {
                        result.media_type && `${result.media_type} *`
                    }{' '}
                    {result.release_date || result.first_air_date} * {''}
                    <BiLike className='like'/> {result.vote_count}
                </p>
           </div>
            
        </div>
    )
    
}
