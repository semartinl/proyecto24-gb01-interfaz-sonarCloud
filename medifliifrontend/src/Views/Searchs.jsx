import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import moviesService from '../Controller/movieController'
import ListCardMovie from '../Components/Movies/ListCardMovie'
import Loading from '../Components/Loading'
import ListSearchMovie from '../Components/Movies/ListSearchMovie'

export default function Searchs() {
    const [searchParams, setSearchParams] = useSearchParams();
    const title = searchParams.get('title')
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('');
    useEffect(()=>{
        if(title){
            setLoading(true)
            console.log(title)
            moviesService.getMovieByTitle(title)
            .then(response => {
                console.log(response)
                if(error){
                    setError('')
                }
                setMovies(response)
            })
            .catch(err => {
                console.log(err)
                if(err.status === 404){
                    setError("Película no encontrada")
                }
                
                })
            .finally(()=> {
                setLoading(false)
                
            })
        }
        setLoading(false)
    },[title])
  return (
    <>
        {loading? <Loading/> :
        <>
            {error? <p>{error}</p> :
            <ListSearchMovie listMovies={movies}/>
            }
        </>
            
        }
        
    </>
  )
}
