addEventListener("DOMContentLoaded", async function () {
  //grab the id (search params) from the url after the question mark and store it in a variable
  const urlparam = new URLSearchParams(window.location.search);
  const songID = urlparam.get("id");
  console.log(songID);

  const response = await fetch("http://localhost:3000/api/songs/" + songID);
  const song = await response.json();
  console.log(song);

  let heading = "";
  heading += `${song.title} page!`;
  document.querySelector("h1").innerHTML = heading;

  let html = "";
  html += `
  <h2>Artist - ${song.artist}</h2>
  <h2>Popularity - ${song.popularity}</h2>
  <h2>Release Date- ${song.releaseDate.substring(0, 10)}</h2>`;
  document.querySelector("div").innerHTML = html;
});
