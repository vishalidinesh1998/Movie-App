import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useContext } from 'react';
import { WatchListContext } from "../Context/WatchListContext";

const Moviecard = ({ movie }) => {
  const { togglewatchlist, watchlist } = useContext(WatchListContext);

  const inWatchList = watchlist.some((m) => m.id == movie.id);

  return (
    <div className="bg-gray-600 p-6 rounded-lg shadow-md text-white relative">
      <img
        className="w-full h-80 object-contain"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h1 className="text-lg font-bold mt-4">{movie.title}</h1>
      <p className="text-gray text-sm">{movie.release_date}</p>
      <button
        className="absolute top-4 right-4 text-red-500"
        onClick={() => togglewatchlist(movie)}
      >
        {inWatchList ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default Moviecard;
