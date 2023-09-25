function MyRecipesComponent({label, cuisineType, image, ingredients, dish}){
    return(
        <div>
             <div className="container">
            <h2>{label}</h2>
        </div>
        
        <div className="container">
            <img src={image} alt="food"/>
        </div>
        <div className="container">
            <h3 className="cuisine">Cuisine: {cuisineType}</h3>
        </div>
        <ul className="container list">
            {ingredients.map((ingredient, index) => (
                <li key={index}>
                ✔ {ingredient}</li>
            ))}
            </ul>
            <ul className="container dishType">
            {dish.map((dish, index) => (
                <li key={index}>
                {dish}</li>
            ))}
            </ul>
        </div>
    )
}

export default MyRecipesComponent;