//You can edit ALL of the code here

// const search = document.createElement("input");
// document.getElementsByName("search").style.width = '300px';
// document.getElementsByName("search").style.cssFloat = "left",
// search.setAttribute("type", "text",)
// document.getElementsByName("search").placeholder = "search";
// const divSearch = document.createElement("div").firstChild;
// const bod = document.getElementsByName("body")
// bod.append(divSearch, search);
// search.style.cssFloat = left;
// search.width = 2fr;
// container.appendChild(search)


function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  // console.log(getAllEpisodes());
}

function makePageForEpisodes(episodeList) {
  // const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  let output = "";

  let container = document.querySelector('#root');

  for (let value of episodeList) {
    console.log(value);

    output += `
    <div class = "episode">
    <h3 class = "episode--name-season">${value.name} - S0${value.season}E0${value.number}</h3>
    <img class = "episode.avatar" src=${value.image.medium}>
    <p class = "episode--summary">${value.summary}</p>
    <a class = "episode--link" href = "#${value.links}">Link to TVMaze.com</a>
    </div>
    `
    
  }
  container.innerHTML = output;

  let input = "";

  let searchTainer = document.createElement("div").firstChild.innerHTML;
  let search = document.createElement("INPUT");
  let bod = document.getElementsByName("Body")

  bod.appendChild(searchTainer);
  searchTainer.appendChild(search);

  
 
}

// episodeLis.forEach(element => {
//   return document.getElementById("root").style.flexFlow = "row nowrap";
// });


window.onload = setup;