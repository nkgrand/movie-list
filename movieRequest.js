import { movieList } from "./movieList.js";

fetch("https://my-json-server.typicode.com/nkgrand/ads-box-server/movies")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    movieList(document.querySelector(".wrapper"), data);
  });
