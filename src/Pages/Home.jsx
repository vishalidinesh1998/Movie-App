import Moviecard from "../Components/Moviecard"
import { useState, useEffect } from "react"


const Home = () => {

    const [movies, setmovies] = useState([])
    const [page, setpage] = useState(1)
    const [search,setsearch]=useState()

    useEffect(() => {
        let url=`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=49c2e93140e0ff3a0785c70d8f5b2f13`
      if(search){
        url=`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=49c2e93140e0ff3a0785c70d8f5b2f13`
      }

        fetch(url)
            .then((response) => response.json())
            .then((data) => setmovies(data.results));
    }, [page,search]);


    return (
        <div className="p-2 pt-14">
            <input type="text" placeholder="Search Movie..."
                className="p-2 w-3/4 md:w-1/2 z-10
                border rounded border-gray-700 bg-gray-900 bg-opacity-55 text-white
                backdrop-blur-md fixed left-1/2 top-14 -translate-x-1/2"
                onChange={(e)=>{
                    setsearch(e.target.value)
                }}/>
            <div className="movie_card grid grid-cols-1 md:grid-cols-3 
                lg:grid-cols-4 gap-6">
                {movies.map((movie, index) => {
                    return (
                        <Moviecard key={index} movie={movie} />
                    )
                })

                }

            </div>
            <div className="pagenavigation flex justify-between mt-4">
                <button className="bg-gray-700 rounded-sm text-white p-2" onClick={() => {
                    setpage(prev => prev - 1)
                }}>Previous</button>
                <button className="bg-gray-700 rounded-sm text-white p-2" onClick={() => {
                    setpage(prev => prev + 1)
                }}>Next</button>
            </div>
        </div>
    )
}
export default Home