import GenerFilter from "../Components/GenerFilter";
import { WatchListContext } from "../Context/WatchListContext";
import { useContext, useState } from "react";
import Moviecard from "../Components/Moviecard";

const Watchlist = () => {
  const { watchlist, generalist } = useContext(WatchListContext);
  const [search, setserach] = useState("");
  const [selectgenre, setselegenre] = useState("");

  const filterdata = watchlist
    .filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((movie) => {
      return !selectgenre || movie.genre_ids.includes(Number(selectgenre));
    });

  return (
    <div className="p-2 pt-14">
      <input
        type="text"
        placeholder="Search Movie..."
        value={search}
        onChange={(e) => setserach(e.target.value)}
        className="p-2 w-3/4 md:w-1/2 z-10
        border rounded border-gray-700 bg-gray-900 bg-opacity-55 text-white
        backdrop-blur-md fixed left-1/2 top-14 -translate-x-1/2"
      />
      <div className="flex justify-center mt-4">
        <GenerFilter generalist={generalist} setselegenre={setselegenre} />
      </div>
      <div className="movie_card grid grid-cols-1 md:grid-cols-3 
      lg:grid-cols-4 gap-6 mt-2">
        {filterdata.map((movie, index) => (
          <Moviecard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
