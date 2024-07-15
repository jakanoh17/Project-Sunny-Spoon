export default function ResultsCard({ recipe, setCurrentRecipe }) {
  function handleViewRecipeClick() {
    setCurrentRecipe(recipe);
  }
  return (
    <div className="result">
      <img src={recipe.img} alt={recipe.name} className="result__img" />
      <h1 className="result__name">{recipe.name}</h1>
      <button
        type="button"
        onClick={handleViewRecipeClick}
        className="result__view-recipe-btn form__results-btn"
      >
        View Recipe
      </button>
    </div>
  );
}
