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
                        console.log('beach data', beache);

                        beachDiv.innerHTML += `<img src="${beache.imageUrl}" alt="${beache.id}">`;
                        beachDiv.innerHTML += `<h2>${beache.name}</h2>`;
                        beachDiv.innerHTML += `<p>${beache.description}</p>`;

                        resultDiv.appendChild(beachDiv);
                    });
                }
            }
            if (input === 'countries') {
                if (data.countries && data.countries.length > 0) {
                    resultDiv.innerHTML = '';
                    let countries = data.countries;

                    countries.forEach(country => {
                        let countriesDiv = document.createElement('div');
                        countriesDiv.classList.add('beach');
                        console.log('beach data', country);

                        countriesDiv.innerHTML += `<img src="${country.imageUrl}" alt="${country.id}">`;
                        countriesDiv.innerHTML += `<h2>${country.name}</h2>`;
                        countriesDiv.innerHTML += `<p>${country.cities}</p>`;

                        resultDiv.appendChild(countriesDiv);
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
                        console.log('beach data', temple);

                        templesDiv.innerHTML += `<img src="${temple.imageUrl}" alt="${temple.id}">`;
                        templesDiv.innerHTML += `<h2>${temple.name}</h2>`;
                        templesDiv.innerHTML += `<p>${temple.description}</p>`;

                        resultDiv.appendChild(templesDiv);
                    });
                }
            }
            else {
                resultDiv.innerHTML += `<p>Three's no data found , please search like 'beaches' or temples etc.</p>`;
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