addEventListener("DOMContentLoaded", async function () {
  document.querySelector("#deleteBtn").addEventListener("click", deleteSong);
  getAllSongs();
});

async function getAllSongs() {
  const response = await fetch("http://localhost:3000/api/songs");
  if (response.ok) {
    const songs = await response.json();
    let html = "";
    for (let song of songs) {
      html += `<option value="${song._id}">${song.title}</option>`; //the value you are going to send to the server when the option is selected (song id) and the selected itemn will be a song title
    }
    document.querySelector("#songDropDown").innerHTML = html;
  }
}

async function deleteSong() {
  //get the song id
  const songID = document.querySelector("#songDropDown option:checked").value; //each value will be the song if of the title we checkced
  const response = await fetch("http://localhost:3000/api/songs/" + songID, {
    method: "DELETE",
  });
  if (response.ok) {
    getAllSongs();
    alert("Song deleted.");
  } else {
    document.querySelector("#error").innerHTML = "cannot delete song.";
  }
}
