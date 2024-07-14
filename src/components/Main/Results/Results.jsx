// import RecipeApi from "../../../utils/RecipeApi";
import React from "react";

// const recipes = new RecipeApi("api.edamam.com/");

function Results({ query }) {
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    fetch("api.edmam.com/api/recipes/v2", {
      headers: {
        "Content-Type": "application/json",
        app_id: "3286f965",
        app_key: "7a19b6ea3ce9defec65341f59ea7794a",
        q: query,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else
        return Promise.reject(`Error: ${res.status}`)
          .then((data) => {
            setResults(data);
          })
          .catch((err) => {
            console.error(err);
          });
    });
  }, []);

  return <div className="results">{results}</div>;
}

export default Results;
