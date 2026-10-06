addEventListener("DOMContentLoaded", function () {
  document.querySelector("#addBtn").addEventListener("click", addSong);
});
//add the song to the database | it has to be async because we are calling data outside our server

async function addSong() {
  //create a song obj based on the form that the user fills out. will make sending the data to the server easier.
  const song = {
    title: document.querySelector("#title").value,
    artist: document.querySelector("#artist").value,
    popularity: document.querySelector("#popularity").value,
    releaseDate: document.querySelector("#released").value,
    genre: document.querySelector("#genre").value
      ? document.querySelector("#genre").value.split(",")
      : [], //if able to split the genre into an array, otherwise make it an array of one item.
  };

  const response = await fetch("http://localhost:3000/api/songs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(song),
  });

  if (response.ok) {
    const results = await response.json();
    alert("Added song with ID of " + results._id);

    document.querySelector("form").reset();
  } else {
    document.querySelector("#error").innerHTML = "Cannot add song due to error";
  }
}
