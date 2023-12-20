import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokemonDetail from "./pages/PokemonDetail";
import ProtectRoutes from "./Components/ProtectRoutes";

function App() {
  return (
    <main>

      

      <Routes>

        <Route path="/" element={<Home />} />

        <Route element={<ProtectRoutes />}>
          
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokemonDetail />} />
        
        </Route>
        
      
      </Routes>

    </main>
  );
}

export default App;
