import { createContext, useState, useEffect } from "react";

// Context Creation
export const WatchListContext = createContext();

// Provider
export const WatchListProvider = ({ children }) => {
  const [watchlist, setwatchlist] = useState([]);
  const [generalist, setgeneralist] = useState([]);
 

  // Fetch genres on load
  useEffect(() => {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=49c2e93140e0ff3a0785c70d8f5b2f13`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setgeneralist(data.genres || []));
  }, []);

  const togglewatchlist = (movie) => {
    const index = watchlist.findIndex((m) => m.id === movie.id);
    if (index === -1) {
      setwatchlist([...watchlist, movie]);
    } else {
      setwatchlist([
        ...watchlist.slice(0, index),
        ...watchlist.slice(index + 1),
      ]);
    }
  };

  return (
    <WatchListContext.Provider
      value={{ watchlist, togglewatchlist, generalist }}
    >
      {children}
    </WatchListContext.Provider>
  );
  
};
