let allEpisodes; // Declare allEpisodes globally
let selectedSeason = null; // Variable to store the currently selected season
let selectedEpisode = null; // Variable to store the currently selected episode
const seasonBtn = document.querySelector(".dropDown-season-Btn");
const seasonOptions = document.querySelectorAll(".season-option");
const episodeBtn = document.querySelector(".dropDown-episode-Btn");
const episodeOptions = document.querySelectorAll(".episode-option");

function setup() { 
  allEpisodes = getAllEpisodes();
  console.log("allEpisodes");
  makePageForEpisodes(allEpisodes);  

  // Search functionality
  let searchBar = document.querySelector("#search-bar");
  searchBar.addEventListener("keyup", () => {
    let searchInput = searchBar.value.toLowerCase();
    let result = getSearch(searchInput, allEpisodes);
    makePageForEpisodes(result);
  });

  function getSearch(searchInput, episodeList) {
    return episodeList.filter(episode => {
      return (
        episode.name.toLowerCase().includes(searchInput) || 
        (episode.summary && episode.summary.toLowerCase().includes(searchInput))
      );
    });
  }

  // Toggle dropdown visibility
  seasonBtn.addEventListener("click", (event) => {
    event.stopPropagation(); 
    toggleDropdown(seasonBtn);
  });

  episodeBtn.addEventListener("click", (event) => {
    event.stopPropagation(); 
    toggleDropdown(episodeBtn);
  });

  // Handle season selection
  seasonOptions.forEach(option => {
    option.addEventListener("click", (event) => {
      event.preventDefault();
      selectedSeason = option.dataset.season; // Store selected season
      filterEpisodesBySeason(selectedSeason); // Filter episodes by season
      toggleDropdown(seasonBtn); 
      updateEpisodeOptions(); // Update episode options based on selected season
    });
  });

  // Handle episode selection
  episodeOptions.forEach(option => {
    option.addEventListener("click", (event) => {
      event.preventDefault();
      selectedEpisode = option.dataset.episode; 
      filterEpisodesByEpisode(selectedSeason, selectedEpisode); // Filter episodes by both season and episode
      toggleDropdown(episodeBtn); 
    });
  });

  // Prevent dropdowns from closing when clicking inside them
  document.querySelectorAll('.dropDown-season-content, .dropDown-episode-content').forEach(content => {
    content.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  });

  document.addEventListener("click", closeDropdowns);
}

function toggleDropdown(button) {
  const dropdownContent = button.nextElementSibling; 
  dropdownContent.classList.toggle("show");
  dropdownContent.style.zIndex = "50"; // Ensure the dropdown content has a higher z-index
  dropdownContent.style.position = "absolute";
}

function closeDropdowns() {
  const dropdowns = document.querySelectorAll('.dropDown-season-content, .dropDown-episode-content');
  dropdowns.forEach(dropdown => dropdown.classList.remove('show'));
}

function filterEpisodesBySeason(season) {
  const filteredEpisodes = allEpisodes.filter(episode => episode.season == season);
  makePageForEpisodes(filteredEpisodes);
}

function filterEpisodesByEpisode(season, episodeNumber) {
  const filteredEpisodes = allEpisodes.filter(episode => episode.season == season && episode.number == episodeNumber);
  makePageForEpisodes(filteredEpisodes);
}

// Update episode options based on the selected season
function updateEpisodeOptions() {
  const episodeOptions = document.querySelectorAll(".episode-option");
  
  episodeOptions.forEach(option => {
    const optionSeason = option.dataset.season;

    if (optionSeason === selectedSeason) {
      option.style.display = 'block'; // Show options in the selected season
    } else {
      option.style.display = 'none'; // Hide options not in the selected season
    }
  });
}

function makePageForEpisodes(episodeList) {
  let output = "";

  if (episodeList.length === 0) {
    output = "<p>No episodes found matching your search.</p>";
  } else {
    for (let episode of episodeList) {
      output += `
        <div class="episode" style="z-index:2;">
          <h3 class="episode--name-season">${episode.name} - S0${episode.season}E0${episode.number}</h3>
          <img class="episode-avatar" src="${episode.image.medium}" alt="${episode.name}">
          <p class="episode--summary">${episode.summary}</p>
          <a class="episode--link" href="${episode.url}" target="_blank">Link to TVMaze.com</a>
        </div>
      `;
    }
  }
  
  document.querySelector('#root').innerHTML = output;
}

window.onload = setup;

