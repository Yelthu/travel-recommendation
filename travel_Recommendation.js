const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');

function searchCondition() {
    const input = document.getElementById('search').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {

            if (input === 'beaches') {
                if (data.beaches && data.beaches.length > 0) {
                    resultDiv.innerHTML = '';
                    let beaches = data.beaches;

                    beaches.forEach(beache => {
                        let beachDiv = document.createElement('div');
                        beachDiv.classList.add('beach');

                        beachDiv.innerHTML += `<img src="${beache.imageUrl}" alt="${beache.id}">`;
                        beachDiv.innerHTML += `<h2>${beache.name}</h2>`;
                        beachDiv.innerHTML += `<p>${beache.description}</p>`;

                        resultDiv.appendChild(beachDiv);
                    });
                }
            }
            if (input === 'australia' || input === 'japan' || input === 'brazil') {
                if (data.countries && data.countries.length > 0) {
                    resultDiv.innerHTML = '';

                    const countries = data.countries.find(country => country.name.toLowerCase() === input);

                    const cities = countries.cities;

                    cities.forEach(city => {
                        let citiesDiv = document.createElement('div');
                        citiesDiv.classList.add('beach');
                

                        citiesDiv.innerHTML += `<img src="${city.imageUrl}" alt="city">`;
                        citiesDiv.innerHTML += `<h2>${city.name}</h2>`;
                        citiesDiv.innerHTML += `<p>${city.description}</p>`;

                        resultDiv.appendChild(citiesDiv);
                    });
                }
            }
            if (input === 'temples') {
                if (data.temples && data.temples.length > 0) {
                    resultDiv.innerHTML = '';
                    let temples = data.temples;

                    temples.forEach(temple => {
                        let templesDiv = document.createElement('div');
                        templesDiv.classList.add('beach');

                        templesDiv.innerHTML += `<img src="${temple.imageUrl}" alt="${temple.id}">`;
                        templesDiv.innerHTML += `<h2>${temple.name}</h2>`;
                        templesDiv.innerHTML += `<p>${temple.description}</p>`;

                        resultDiv.appendChild(templesDiv);
                    });
                }
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

const clearForm = () => {
    document.getElementById('search').value = '';
    document.getElementById('result').innerHTML = '';
}

btnSearch.addEventListener('click', searchCondition);
btnClear.addEventListener('click', clearForm);