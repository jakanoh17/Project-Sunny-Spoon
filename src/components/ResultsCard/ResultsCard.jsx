export default function ResultsCard({ name, image }) {
  return (
    <div className="result">
      <img src={image} alt={name} className="result__img" />
      <h1 className="recipe__name">{name}</h1>
      <button className="recipe__view-recipe-btn">View Recipe</button>
    </div>
  );
}
