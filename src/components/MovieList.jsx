import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies , movieType}) => {
  return (
    <div>
        <h1 className='p-5 text-2xl font-bold text-start' >{movieType}</h1>
        <div className='overflow-x-auto scrollbar-hide'>
         <div className='flex flex-nowrap py-4'>
         {movies?.map((movie) => <MovieCard key={movie.id} poster_path = {movie.poster_path}/>)} 
        </div>
        </div>
       

       
                
      
    </div>
  )
}

export default MovieList
