const BASE_URL = "https://restcountries.com/v3.1";
const params = new URLSearchParams(window.location.search);

const country = params.get("country");

console.log(country);

function getAllDatas(name) {
  fetch(`${BASE_URL}/name/${name}?fullText=true`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      getDataDetails(data);
    });
}

getAllDatas(country);

function getDataDetails(countries) {
  const detailWeb = document.querySelector("#detail-web");
  countries.forEach((country) => {
    const dataContent = document.createElement("div");
    dataContent.className = "data-content";
    dataContent.innerHTML = `
    
         
          <img src="${country.flags.svg}" class="card-img-left " alt="..." />
          
          <div class="context">
            <h2>${country.name.common}</h2>
            <div class="data-details">
              <div class="left">
                <ul style="width: 100%;">
                  <li class="detail-items"><b>Native Name</b>: ${
                    country.name.nativeName
                      ? Object.values(country.name.nativeName)[0].common
                      : ""
                  }</li>
                  <li class="detail-items"><b>Population:</b> ${
                    country.population.toLocaleString()
                  }</li>
                  <li class="detail-items"><b>Region:</b> ${country.region}</li>
                  <li class="detail-items"><b>Sub Region:</b> ${
                    country.subregion
                  }</li>
                  <li class="detail-items"><b>Capital:</b> ${
                    country.capital
                  }</li>
                </ul>
              </div>
              <div class="right">
                <ul>
                  <li class="detail-items"> <b>Top Level Domain:</b> ${
                    country.tld
                  }</li>
                  <li class="detail-items"> <b>Currencies:</b> ${
                    country.currencies
                      ? Object.values(country.currencies)[0].name
                      : "N/A"
                  }</li>
                  <li class="detail-items"> <b>Languages:</b>  ${
                    country.languages
                      ? Object.values(country.languages).join(", ")
                      : "N/A"
                  }</li>
                </ul>
              </div>
            </div>
            <p><b>Border Countries:</b> </p> <div >${country.borders}</div>
          </div>
        
    `;

    detailWeb.appendChild(dataContent);
  });
}
