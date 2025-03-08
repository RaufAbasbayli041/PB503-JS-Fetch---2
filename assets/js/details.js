const BASE_URL = "https://restcountries.com/v3.1/all";

function getAllDatas() {
  fetch(BASE_URL)
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
          <a href="" >
                  <div class="image-wrapper">
                  <img src="${country.flags.svg}" class="card-img-top flag" alt="..." />
                    </div>
                    <div class="card-body ">
                    <h5 class="card-title ">${country.name.common}</h5>
                    </div>
                    <ul class="list-group list-group-flush desc ulList" >
                    <li class="list-group-item ">Population: ${country.population}</li>
                    <li class="list-group-item">Region: ${country.region}</li>
                    <li class="list-group-item">Capital: ${country.capital}</li>
                    </ul>
                    </div>
                    </div> 
                    </a>
                    </div>`;

    cards.appendChild(cardWrapper);
  });
}