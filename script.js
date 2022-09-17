//You can edit ALL of the code here

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  // console.log(getAllEpisodes());
}

let container = document.querySelector('#root');
let searchBar = document.querySelector("input");

  // console.log(searchBar + "is my searchBar");
  // console.log(container + "is my holder");

  
  document.querySelector("input").setAttribute("type", "text");
  document.querySelector("input").setAttribute("id", "search");
  document.querySelector("input").setAttribute("placeholder", "search for Episode");
  document.getElementById("search").style.zIndex = "1";
  document.getElementById("search").style.position = "absolute";
  document.getElementById("search").style.margin = "auto";
  document.getElementById("search").style.padding = "auto";
  
  // console.log(searchBar + "this is my updated searchbar");

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

console.log(searchBar);

let filtered = Object.keys(getAllEpisodes)
console.log(filtered + "begining");

searchBar.addEventListener("keyup", (e) => {
  const searchInput = e.target.key;
  // .toLowerCase()
  console.log(e.target.key + "targeted");
  const filteredEpisodes = filtered.filter(searchEp => {
    return (
      searchEp.name.toLowerCase().includes(searchInput) || 
      searchEp.summary.toLowerCase().includes(searchInput)
      );
  })
  console.log(getAllEpisodes(filteredEpisodes));
})
console.log(filtered + "end");