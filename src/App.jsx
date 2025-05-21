import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Watchlist from './Pages/Watchlist'
import { WatchListProvider } from './Context/WatchListContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <WatchListProvider>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" exact element={<Home/>}/>
    <Route path="/Watchlist" element={<Watchlist/>}/>
   </Routes>
   </BrowserRouter>
   </WatchListProvider>
  )
}

export default App
