import line from "../../../images/Line.svg";
import React from "react";

function RecipeForm({ query, setQuery }) {
  function handleCheckboxClick(evt) {
    if (evt.target.checked) {
      setQuery([...query, evt.target.value]);
    } else {
      const indexOfRemovedItem = query.findIndex(
        (elem) => elem == evt.target.value
      );
      const newQuery = query.toSpliced(indexOfRemovedItem, 1);
      setQuery(newQuery);
    }
  }
  return (
    <div className="recipe-form">
      <form className="form">
        {/* <!-- This will hold the populated ingredients from the search --> */}
        <div className="form__container">
          <input
            placeholder="Strawberry..."
            className="form__input form__input_type_text"
            type="search"
            value={query}
          />
        </div>
        <div className="form__image_container">
          <img src={line} alt="Line" className="form__image" />
        </div>
        {/* <!-- This is the ckeck box of summer ingredients --> */}
        <form className="subform form__check-box">
          <label htmlFor="ingrd1" type="checkbox">
            <input
              type="checkbox"
              name="ingrd1"
              value="Cucumbers"
              onClick={handleCheckboxClick}
            />
            Cucumbers
          </label>

          <label htmlFor="ingrd2">
            <input
              type="checkbox"
              name="ingrd2"
              value="Watermelon"
              onClick={handleCheckboxClick}
            />
            Watermelon
          </label>

          <label htmlFor="ingrd3">
            <input
              type="checkbox"
              name="ingrd3"
              value="Lemons"
              onClick={handleCheckboxClick}
            />
            Lemons
          </label>

          <label htmlFor="ingrd4">
            <input
              type="checkbox"
              name="ingrd4"
              value="Cantaloupe"
              onClick={handleCheckboxClick}
            />
            Cantaloupe
          </label>

          <label htmlFor="ingrd5">
            <input
              type="checkbox"
              name="ingrd5"
              value="Tequila"
              onClick={handleCheckboxClick}
            />
            Tequila
          </label>

          <label htmlFor="ingrd6">
            <input
              type="checkbox"
              name="ingrd6"
              value="Gin"
              onClick={handleCheckboxClick}
            />{" "}
            Gin
          </label>

          <label htmlFor="ingrd7">
            <input
              type="checkbox"
              name="ingrd7"
              value="Wine"
              onClick={handleCheckboxClick}
            />{" "}
            Wine
          </label>

          <label htmlFor="ingrd8">
            <input
              type="checkbox"
              name="ingrd8"
              value="Strawberry"
              onClick={handleCheckboxClick}
            />
            Strawberry
          </label>

          <label htmlFor="ingrd9">
            <input
              type="checkbox"
              name="ingrd9"
              value="Coconut Milk"
              onClick={handleCheckboxClick}
            />
            Cucumbers
          </label>

          <label htmlFor="ingrd10">
            <input
              type="checkbox"
              name="ingrd10"
              value="Orange"
              onClick={handleCheckboxClick}
            />
            Orange
          </label>
        </form>
        {/* <!--This is the search --> */}
        <div className="form__input_container">
          {/* <!-- <button className="form__input_btn">?</button> --> */}
        </div>
        <div className="form__container_results-btn">
          <button className="form__results-btn">Find Recipes</button>
        </div>
      </form>

      <section className="cards">
        <ul className="cards__list"></ul>
      </section>
    </div>
  );
}

export default RecipeForm;
