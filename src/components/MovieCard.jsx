import React from 'react'

const MovieCard = ({ poster_path }) => {
  return (
    <div className='h-64 w-40 flex-shrink-0 mx-2 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300'>
        <img  className=" " src= {"https://image.tmdb.org/t/p/w200"+poster_path} alt="Movie Poster" />
      
    </div>
  )
}

export default MovieCard
