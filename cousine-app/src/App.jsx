
import { Home } from './components/Home'
import { MusicHome } from './components/music/MusicHome'

import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeHome from './components/recipe/RecipeHome';


function App() {

  return (
    <>
    <BrowserRouter>
      <div className="container mt-5">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/music" element={<MusicHome/>} />
          <Route exact path="/recipe" element={<RecipeHome/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
