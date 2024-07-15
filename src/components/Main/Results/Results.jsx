import RecipeApi from "../../../utils/RecipeApi";
import ResultsCard from "../../ResultsCard/ResultsCard";
import React from "react";

function Results(props) {
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    const recipes = new RecipeApi(props.query);

    recipes
      .getRecipe()
      .then((data) => {
        const slicedData = data.hits.slice(1, 7);
        const modifiedResults = slicedData.map((hit) => {
          const recipe = {};
          recipe.name = hit.recipe.label;
          recipe.img = hit.recipe.images.REGULAR.url;
          recipe.id = recipe.ingredients = hit.recipe.ingredients.map(
            (ingredientElem) => ingredientElem.text
          );
          return recipe;
        });
        setResults(modifiedResults);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props.query]);

  return (
    <div className="results results__container">
      <ul className="results__cards">
        {results.map((result, index) => {
          return (
            <li key={index} className="results__card">
              <ResultsCard
                recipe={result}
                setCurrentRecipe={props.setCurrentRecipe}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Results;
