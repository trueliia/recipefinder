import './App.css';
import { useState, useEffect } from "react";
import video from "./food.mp4";
import finder from "./finder.PNG";
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const MY_ID = "f6aa5f23";
  const MY_KEY = "309f600db83275228b5619465e8d6779";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("cod")

  useEffect(() =>{
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      console.log(data.hits);
      setMyRecipes(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) =>{
    console.log(e.target.value);
    setMySearch(e.target.value)
  }
  const finalSearch = (e) =>{
    e.preventDefault()
    setWordSubmitted(mySearch)
  }

  return (
  <div className="App">
    <div className="container">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <h1>Find a Recipe</h1>
    </div>
    <div className="searchForm">
      <div className="container">
     <form onSubmit={finalSearch}>
         <input className="search" placeholder="Search..." onChange ={myRecipeSearch}/>
    </form>
    </div>
    <div className="container">
    <button onClick={finalSearch}>
        <img src={finder} alt="icon" width="30px"/>
    </button>
    </div>
  </div>
    {myRecipes.map((element, index) =>
      <MyRecipesComponent key={index}
      label={element.recipe.label}
      image={element.recipe.image} 
      cuisineType={element.recipe.cuisineType}
      ingredients={element.recipe.ingredientLines}
      dish={element.recipe.dishType}/>
      )}
  </div>
  );
}

export default App;
