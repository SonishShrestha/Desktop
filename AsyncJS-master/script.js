/*
const p = document.querySelector('p');

p.textContent = 'This is a new text';

alert('Waiting for user response');

p.textContent = 'New Text';

console.log(p);

setTimeout(function () {
  p.textContent = 'This is running in background';
}, 5000);

p.style.color = 'red';
https://restcountries.eu/rest/v2/name/{name}
*/

const renderCountry = function (data, className = '') {
  const html = `<article class='country ${className}'>
    <img class='country__img' src='${data.flags.png}' />
    <div class='country__data'>
      <h3 class='country__name'>${data.altSpellings[1]}</h3>
      <h4 class='country__region'>${data.region}</h4>
      <p class='country__row'>
        <span>👫</span>${(+data.population / 1000000).toFixed(1)}
      </p>
      <p class='country__row'>
        <span>🗣️</span>${data.capital}
      </p>
      <p class='country__row'>
        <span>💰</span>${data.currencies}
      </p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getCountryWithNeighbour = function (country) {
  // const request = new XMLHttpRequest();
  // request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0])
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      console.log(neighbour);
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, 'neighbour'));

  /*
  console.log(request);
  request.send();

  JSON.parse(this.responseText));

  request.addEventListener('load', function () {
  console.log(JSON.parse(this.responseText));
  const [data] = JSON.parse(this.responseText);

  console.log(data);
  renderCountry(data);
    const [neighbour] = data.borders;

    console.log(neighbour);
    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);

    // console.log(request);
    request2.send();

    console.log(request2);

    request2.addEventListener('load', function () {
      // console.log(this.responseText);
      const data2 = JSON.parse(this.responseText);

      renderCountry(data2, 'neighbour');
    });
  });
  */
};



// getCountryWithNeighbour('brazil');
getCountryWithNeighbour('nepal');

// getCountryWithNeighbour('us');
/*
getCountryData('usa');
getCountryData('portugal');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
        setTimeout(() => {
          console.log('6 seconds passed');
        }, 2000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

const exeFunction = (resolve) => {
  reject('Resolved');
};

const exeFunction = (reject) => {
  reject('Resolved');
};

console.log(new Promise(exeFunction));
*/

// async function normalFunction() {
//   return 5;
// }

// // console.log(normalFunction());

// normalFunction().then((resolve) => console.log(resolve));
