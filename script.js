//You can edit ALL of the code here

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  // console.log(getAllEpisodes());
}

let container = document.querySelector('#root');
let searchBar = document.createElement("input");

  console.log(searchBar + "is my searchBar");
  console.log(container + "is my holder");

  container.appendChild(searchBar);
  searchBar.setAttribute("type", "text");
  searchBar.setAttribute("id", "search");
  searchBar.setAttribute("placeholder", "search for Episode");
  document.getElementById("search").style.zIndex = "1";
  document.getElementById("search").style.position = "fixed";
  document.getElementById("search").style.margin = "auto";
  
  console.log(searchBar);

  // searchBar.addEventListener("keyup", (e) => {
  //   console.log(searchBar);
    // const searchInput = e.target.value.toLowerCase();
    // const filteredEpisodes = container.filter(searchEp => {
    //   return (
    //     searchEp.name.toLowerCase().includes(searchInput) || 
    //     searchEp.summary.toLowerCase().includes(searchInput)
    //     );
    // })
    // console.log(getAllEpisodes(filteredEpisodes));
  // })


function makePageForEpisodes(episodeList) {
let output = "";
  for (let value of episodeList) {
    console.log(value);
    output += `
    <div class = "episode" style = "z-index:2;">
    <h3 class = "episode--name-season">${value.name} - S0${value.season}E0${value.number}</h3>
    <img class = "episode.avatar" src=${value.image.medium}>
    <p class = "episode--summary">${value.summary}</p>
    <a class = "episode--link" href = "#${value.links}">Link to TVMaze.com</a>
    </div>
    `
  }
  container.innerHTML = output;
}
window.onload = setup;