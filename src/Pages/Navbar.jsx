import { useContext } from "react"
import Home from "./Home"
import Watchlist from "./Watchlist"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { WatchListContext } from "../Context/WatchListContext"
const Navbar=()=>{
const {watchlist}=useContext(WatchListContext)

    return(
        <nav className="bg-black p-2 flex justify-between text-white  top-0 sticky z-10">
           <Link to="/" className=" font-bold text-xl">Movie App</Link>
           <Link to="/Watchlist" className="text-xl">Watchlist({watchlist.length})</Link>
        </nav>
    )
}
export default Navbar