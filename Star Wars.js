let buttonCosmonaut = document.getElementById("pic1");
let buttonRocket = document.getElementById("pic2");
let buttonPrevious = document.getElementById("prevBtn");
let buttonNext = document.getElementById("nextBtn");
let nextPreviousButtonsDiv = document.getElementById("new_btn");

let loader = document.getElementById("loader");
let page = 1;

async function starPeople(url) {
  loader.innerHTML = `<img src="./loader/loader.gif" />`;
  try {
    const starPeopleResponse = await fetch(url);
    const starPeopleParsed = await starPeopleResponse.json();
    starWarsTablePeople(starPeopleParsed);
    loader.innerHTML = "";
    if (starPeopleParsed.next == null) {
      buttonPrevious.style.visibility = "visible";
      buttonNext.style.visibility = "hidden";
    } else if (starPeopleParsed.previous == null) {
      buttonPrevious.style.visibility = "hidden";
      buttonNext.style.visibility = "visible";
    } else {
      buttonPrevious.style.visibility = "visible";
      buttonNext.style.visibility = "visible";
    }
  } catch {
    (error) => console.log(error);
  }
}

function starWarsTablePeople(starPeople) {
  let starWarsThead = document.querySelector("thead");
  let starWarsTbody = document.querySelector("tbody");
  starWarsTbody.innerHTML = "";

  starWarsThead.innerHTML = `<th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Gender</th>
            <th>Birth Year</th>
            <th>Films</th>`;
  starPeople.results.forEach((starWarriors) => {
    starWarsTbody.innerHTML += `
            <tr>
            <td>${starWarriors.name}</td>
            <td>${starWarriors.height}</td>
            <td>${starWarriors.mass}</td>
            <td>${starWarriors.gender}</td>
            <td>${starWarriors.birth_year}</td>
            <td>${starWarriors.films.length}</td>
            </tr>`;
  });
}

buttonCosmonaut.addEventListener("click", () => {
  starPeople(`https://swapi.dev/api/people/?page=${page}`);

  buttonNext.addEventListener("click", () => {
    page++;
    starPeople(`https://swapi.dev/api/people/?page=${page}`);
  });
  buttonPrevious.addEventListener("click", () => {
    page--;
    starPeople(`https://swapi.dev/api/people/?page=${page}`);
  });
});

async function starShips(url) {
  loader.innerHTML = `<img src="./loader/loader.gif" />`;
  try {
    const starShipsResponse = await fetch(url);
    const starShipsParsed = await starShipsResponse.json();
    starWarsTableShips(starShipsParsed);
    loader.innerHTML = "";
    if (starShipsParsed.next == null) {
      buttonPrevious.style.visibility = "visible";
      buttonNext.style.visibility = "hidden";
    } else if (starShipsParsed.previous == null) {
      buttonPrevious.style.visibility = "hidden";
      buttonNext.style.visibility = "visible";
    } else {
      buttonPrevious.style.visibility = "visible";
      buttonNext.style.visibility = "visible";
    }
  } catch {
    (error) => console.log(error);
  }
}

function starWarsTableShips(starShips) {
  let starWarsThead = document.querySelector("thead");
  let starWarsTbody = document.querySelector("tbody");
  starWarsTbody.innerHTML = "";

  starWarsThead.innerHTML = `<th>Name</th>
           <th>Model</th>
           <th>Manufacturer</th>
           <th>Length</th>
           <th>Passengers</th>
           <th>Cargo Capacity</th>`;
  starShips.results.forEach((starVessels) => {
    starWarsTbody.innerHTML += `
           <tr>
           <td>${starVessels.name}</td>
           <td>${starVessels.model}</td>
           <td>${starVessels.manufacturer}</td>
           <td>${starVessels.length}</td>
           <td>${starVessels.passengers}</td>
           <td>${starVessels.cargo_capacity}</td>
           </tr>`;
  });
}

buttonRocket.addEventListener("click", () => {
  starShips(`https://swapi.dev/api/starships/?page=${page}`);

  buttonPrevious.addEventListener("click", () => {
    page--;
    starShips(`https://swapi.dev/api/starships/?page=${page}`);
  });

  buttonNext.addEventListener("click", () => {
    page++;
    starShips(`https://swapi.dev/api/starships/?page=${page}`);
  });
});
