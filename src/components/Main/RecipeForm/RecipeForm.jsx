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

  // function handleTextbox(evt) {
  //   setQuery([...query]);
  // }
  return (
    <div className="recipe-form">
      <form className="form">
        {/* <!-- This will hold the populated ingredients from the search --> */}
        <div className="form__container">
          {/* <input
            placeholder="Strawberry..."
            className="form__input form__input_type_text"
            type="text"
            onChange={handleTextbox}
          /> */}
          <p
            className={`form__query ${
              query.length == 0 ? "form__query_empty" : ""
            }`}
          >
            {query.length == 0
              ? "Checked options will appear here"
              : query.join(", ")}
          </p>
        </div>
        <div className="form__image_container">
          <img src={line} alt="Line" className="form__image" />
        </div>
        {/* <!-- This is the ckeck box of summer ingredients --> */}
        <div className="subform form__check-box">
          <label htmlFor="ingrd1" type="checkbox">
            <input
              type="checkbox"
              name="ingrd1"
              value="Cucumbers"
              onChange={handleCheckboxClick}
            />
            Cucumbers
          </label>

          <label htmlFor="ingrd2">
            <input
              type="checkbox"
              name="ingrd2"
              value="Watermelon"
              onChange={handleCheckboxClick}
            />
            Watermelon
          </label>

          <label htmlFor="ingrd3">
            <input
              type="checkbox"
              name="ingrd3"
              value="Lemons"
              onChange={handleCheckboxClick}
            />
            Lemons
          </label>

          <label htmlFor="ingrd4">
            <input
              type="checkbox"
              name="ingrd4"
              value="Cantaloupe"
              onChange={handleCheckboxClick}
            />
            Cantaloupe
          </label>

          <label htmlFor="ingrd5">
            <input
              type="checkbox"
              name="ingrd5"
              value="Tequila"
              onChange={handleCheckboxClick}
            />
            Tequila
          </label>

          <label htmlFor="ingrd6">
            <input
              type="checkbox"
              name="ingrd6"
              value="Gin"
              onChange={handleCheckboxClick}
            />{" "}
            Gin
          </label>

          <label htmlFor="ingrd7">
            <input
              type="checkbox"
              name="ingrd7"
              value="Wine"
              onChange={handleCheckboxClick}
            />{" "}
            Wine
          </label>

          <label htmlFor="ingrd8">
            <input
              type="checkbox"
              name="ingrd8"
              value="Strawberry"
              onChange={handleCheckboxClick}
            />
            Strawberry
          </label>

          <label htmlFor="ingrd9">
            <input
              type="checkbox"
              name="ingrd9"
              value="Coconut Milk"
              onChange={handleCheckboxClick}
            />
            Coconut Milk
          </label>

          <label htmlFor="ingrd10">
            <input
              type="checkbox"
              name="ingrd10"
              value="Orange"
              onChange={handleCheckboxClick}
            />
            Orange
          </label>
        </div>
        {/* <!--This is the search --> */}
        <div className="form__input_container">
          {/* <!-- <button className="form__input_btn">?</button> --> */}
        </div>
        {/* <div className="form__container_results-btn">
          <button className="form__results-btn">Find Recipes</button>
        </div> */}
      </form>

      <section className="cards">
        <ul className="cards__list"></ul>
      </section>
    </div>
  );
}

export default RecipeForm;
