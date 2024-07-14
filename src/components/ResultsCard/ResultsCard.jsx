export default function ResultsCard({ name, image }) {
  return (
    <div className="result">
      <img src={image} alt={name} className="result__img" />
      <h1 className="result__name">{name}</h1>
      <button className="result__view-recipe-btn form__results-btn">
        View Recipe
      </button>
    </div>
  );
}
