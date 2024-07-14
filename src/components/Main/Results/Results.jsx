import RecipeApi from "../../../utils/RecipeApi";
import React from "react";

function Results({ query }) {
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    const recipes = new RecipeApi(query);

    recipes
      .getRecipe()
      .then((data) => {
        setResults(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [query]);

  return <div className="results">{results}</div>;
}

export default Results;
