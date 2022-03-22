import CharacterServices from './characterservices.js'

function showCharacters() {
    fetch(CharacterServices)
        .then(response => response.json())
        .then(json => {

            json.map(results => {

                fetch(results.episode[0])
                    .then(response => response.json())
                    .then(request => {

                        var container = document.querySelector('.container');

                        container.innerHTML += `<div class="card"> <img class="card-image" src=` + results.image + `>
                    <div class="container-text"><h4> ` + results.name + ` </h4>
                    <p> Gender : `  + results.gender + `</p>
                    <p> Status : `  + results.status + `</p>
                    <p> Origin : `  + results.origin.name + `</p>
                    <p> Ep: `  + request.name + ` / ` + request.air_date + `</p></div></div>
                    `;
                    })
                    .catch(error => console.error(error));
            })
        })
}
showCharacters()