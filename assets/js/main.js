const BASE_URL = "https://restcountries.com/v3.1";
let a = []


function getAllDatas() {
  fetch(`${BASE_URL}/all`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      printCards(data);
    });
}

getAllDatas();

function printCards(countries) {
  const cards = document.querySelector(".cards");
  countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
  countries.forEach((country) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.className =
      " col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center divcl";
    cardWrapper.innerHTML = ` 
          <div class="card ">
          <a href="details.html?country=${country.name.common}" >
                  <div class="image-wrapper">
                  <img src="${
                    country.flags.svg
                  }" class="card-img-top flag" alt="..." />
                    </div>
                    <div class="card-body ">
                    <h5 class="card-title" ><b>${country.name.common}</b></h5>
                    </div>
                    <ul class="list-group list-group-flush desc ulList" >
                    <li class="list-group-item "><b>Population:</b> ${country.population.toLocaleString()}</li>
                    <li class="list-group-item"><b>Region:</b> ${
                      country.region
                    }</li>
                    <li class="list-group-item"><b>Capital:</b> ${
                      country.capital
                    }</li>
                    </ul>
                    </div>
                    </div> 
                    </a>
                    </div>`;

    cards.appendChild(cardWrapper);
  });
}

function searchData() {
  const searchInput = document.getElementById("search-input")
  searchInput.addEventListener("input", function () {
  const salam = searchInput.value.trim().toLowerCase()
    printCards(a.filter(b=>b.name.official.include(searchInput)))
  });
}
searchData()
