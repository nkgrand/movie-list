function movieList(wrapper, movies) {
  console.log(wrapper, movies);
  const rootDiv = document.createElement("div");
  rootDiv.classList.add("card__wrapper");

  for (let movie of movies) {
    const div = document.createElement("div");
    div.classList.add("card__item");
    const img = document.createElement("img");
    img.classList.add("card__item__img");
    img.src = movie.preview.high;
    console.log(img);
    const h3 = document.createElement("h3");
    h3.classList.add("card__item__genre");
    h3.textContent = movie.genre;
    const h4 = document.createElement("h4");
    h4.classList.add("card__item__rating");
    h4.textContent = movie.rating;
    const h2 = document.createElement("h2");
    h2.classList.add("card__item__title");
    h2.textContent = movie.title;
    const p = document.createElement("p");
    p.classList.add("card__item__description");
    p.textContent = movie.description;

    div.append(img);
    div.append(h3);
    div.append(h4);
    div.append(h2);
    div.append(p);
    rootDiv.append(div);
  }

  wrapper.append(rootDiv);
}

export { movieList };
