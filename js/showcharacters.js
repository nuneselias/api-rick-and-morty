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
                    <p><strong> Gender:</strong> `  + results.gender + `</p>
                    <p><strong> Status:</strong> `  + results.status + `</p>
                    <p><strong> Origin:</strong> `  + results.origin.name + `</p>
                    <p><strong> Ep:</strong> `  + request.name + ` / <strong>` + request.air_date + `</strong></p></div></div>
                    `;
                    })
                    .catch(error => console.error(error));
            })
        })
}
showCharacters()