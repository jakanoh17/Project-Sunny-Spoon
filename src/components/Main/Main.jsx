import RecipeForm from "./RecipeForm/RecipeForm";
import Results from "./Results/Results";
import React from "react";

function Main() {
  const [query, setQuery] = React.useState(["chicken", "tomato"]);

  return (
    <main className="page__content" id="link-home">
      <RecipeForm query={query} setQuery={setQuery} />
      <Results query={query} />
    </main>
  );
}

export default Main;
