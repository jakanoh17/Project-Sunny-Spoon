class RecipeApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getRecipe() {
    return fetch(this.baseUrl + "/api/recipes/v2", {
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else return Promise.reject(`Error: ${res.status}`);
    });
  }
}
