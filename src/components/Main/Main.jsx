import line from "../../images/Line.svg";

function Main() {
  return (
    <main className="page__content" id="link-home">
      <form className="form">
        {/* <!-- This will hold the populated ingredients from the search --> */}
        <div className="form__container">
          <p className="form__container-text"></p>
        </div>
        <div className="form__image_container">
          <img src={line} alt="Line" className="form__image" />
        </div>
        {/* <!-- This is the ckeck box of summer ingredients --> */}
        <div className="form__check-box">
          <label for="ingrd1" type="checkbox">
            <input type="checkbox" name="ingrd1" value="Cucumbers" />
            Cucumbers
          </label>

          <label for="ingrd2">
            <input type="checkbox" name="ingrd2" value="Watermelon" />
            Watermelon
          </label>

          <label for="ingrd3">
            <input type="checkbox" name="ingrd3" value="Lemons" />
            Lemons
          </label>

          <label for="ingrd4">
            <input type="checkbox" name="ingrd4" value="Cantaloupe" />
            Cantaloupe
          </label>

          <label for="ingrd5">
            <input type="checkbox" name="ingrd5" value="Tequila" />
            Tequila
          </label>

          <label for="ingrd6">
            <input type="checkbox" name="ingrd6" value="Gin" /> Gin
          </label>

          <label for="ingrd7">
            <input type="checkbox" name="ingrd7" value="Wine" /> Wine
          </label>

          <label for="ingrd8">
            <input type="checkbox" name="ingrd8" value="Strawberry" />
            Strawberry
          </label>

          <label for="ingrd9">
            <input type="checkbox" name="ingrd9" value="Coconut Milk" />
            Cucumbers
          </label>

          <label for="ingrd10">
            <input type="checkbox" name="ingrd10" value="Orange" />
            Orange
          </label>
        </div>
        {/* <!--This is the search --> */}
        <div className="form__input_container">
          {/* <!-- <button className="form__input_btn">?</button> --> */}
          <input
            type="text"
            placeholder="Strawberry..."
            className="form__input"
          />
        </div>
      </form>
      <div className="form__container_results-btn">
        <button className="form__results-btn">Find Recipes</button>
      </div>
      <section className="cards">
        <ul className="cards__list"></ul>
      </section>
    </main>
  );
}

export default Main;
