import React from "react";

const RecipeTemplate = ({ recipe }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  function onClose() {
    setIsOpen(false);
  }

  return (
    <div className={`recipe-modal ${isOpen ? "recipe-modal_opened" : ""}`}>
      <div className="recipe-modal__container">
        <button
          type="button"
          className="recipe-modal__close-btn"
          onClick={onClose}
        />
        <div className="recipe-modal__left-container">
          <img
            src={recipe.img}
            alt={recipe.name}
            className="recipe-modal__img"
          />
        </div>
        <div className="recipe-modal__right-container">
          <h2>{recipe.name}</h2>
          <h3>Ingredients</h3>
          <ul>
            {/* {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))} */}
          </ul>
          {/* <h3>Instructions</h3> */}
          {/* <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol> */}
        </div>
      </div>
    </div>
  );
};

export default RecipeTemplate;
