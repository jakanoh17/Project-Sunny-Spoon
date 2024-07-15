import RecipeForm from "./RecipeForm/RecipeForm";
import Results from "./Results/Results";
import React from "react";
import RecipeTemplate from "./RecipeTemplate/RecipeTemplate";

function Main() {
  const [query, setQuery] = React.useState([]);
  const [currentRecipe, setCurrentRecipe] = React.useState({});

  return (
    <main className="page__content" id="link-home">
      <RecipeForm query={query} setQuery={setQuery} />
      <Results query={query} setCurrentRecipe={setCurrentRecipe} />
      <RecipeTemplate recipe={currentRecipe} />
    </main>
  );
}

export default Main;
