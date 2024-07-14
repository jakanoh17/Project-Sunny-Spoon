import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Recipe from "../Recipe/Recipe";
import { Routes, Route } from "react-router-dom";

function App() {
  const [currentRecipe, setCurrentRecipe] = React.useState({ id: 2 });
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path={`/recipe-${currentRecipe.id}`} element={<Recipe />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
