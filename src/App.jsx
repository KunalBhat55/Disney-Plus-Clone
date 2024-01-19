import "./App.css";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import ProductionHouse from "./Components/ProductionHouse";
import GenreMovieList from "./Components/GenreMovieList";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
  
    setTimeout(() => {
    
      setIsLoading(false);

    }, 1200)
  
  
  }, [])

  return (
    <div className="">
      {isLoading ? (
        "Loading..."
      ) : (
        <div>
          <Header />

          <Slider />

          <ProductionHouse />

          <GenreMovieList />
        </div>
      )}
    </div>
  );
}

export default App;
