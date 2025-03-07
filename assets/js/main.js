const BASE_URL = "https://restcountries.com/v3.1/all ";
const cards = document.querySelector(".card-wrapper");



fetch(BASE_URL)
  .then((response) => response.json())
  .then((datas) => {
    datas.forEach((data) => {
      cards.innerHTML += ` <div class="card" >
            <img src="${data.flags.svg}" class="card-img-top flags" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${data.name.common}</h5>
            </div>
            <ul class="list-group list-group-flush " >
              <li class="list-group-item">Population: ${data.population}</li>
              <li class="list-group-item">Region: ${data.region}</li>
              <li class="list-group-item">Capital: ${data.capital}</li>
            </ul>
          </div>`;
    });
  });
