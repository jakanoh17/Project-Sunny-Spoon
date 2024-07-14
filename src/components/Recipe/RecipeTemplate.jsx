import React from 'react';

const RecipeTemplate = ({ recipe }) => {
    return (
        <div>
            <h2>{recipe.name}</h2>
            <p><strong>Prep Time:</strong> {recipe.prepTime}</p>
            <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
            <p><strong>Servings:</strong> {recipe.servings}</p>
            <h3>Ingredients</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions</h3>
            <ol>
                {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </div>
    );
};

export default RecipeTemplate;
