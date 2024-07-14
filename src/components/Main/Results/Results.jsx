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
          recipe.ingredients = hit.recipe.ingredients.map(
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
    <div className="results">
      <ul className="results__cards">
        {results.map((result, index) => {
          return (
            <li key={index} className="results__card">
              <ResultsCard name={result.name} image={result.img} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Results;
