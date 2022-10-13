//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

let container = document.querySelector('#root');

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

let searchBar = document.querySelector("input");
let searchInput ;

searchBar.addEventListener("keyup" ,() => {
    searchInput = searchBar.value;
    let result = getSearch(searchInput);
    console.log(result);
});


function getSearch(i) {
  for(let i = 0; i < getAllEpisodes.length; i++)
  if (getAllEpisodes[i].name.value == searchInput) {
        index.style.display = "grid";
      } else if (getAllEpisodes[i].summary.value == searchInput) {
        index.style.display = "grid";
      } else {
        index.style.display = "none"
      }
      
}

// function showResults(query){
//   const searchList = document.querySelector("#searchList");
//   searchList.innerHTML = "";
//   query.forEach((query) => {
//       const li = document.createElement('li');
//       li.innerText = query;
//       searchList.append(li)
//   })
// }

