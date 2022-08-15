// TODO: add code here

window.addEventListener("load", function() {
    const url = "https://handlers.education.launchcode.org/static/astronauts.json";
    fetch(url).then( function(response) {
        // Access the JSON in the response
        response.json().then( function(json) {
            const astronautData = document.getElementById('container');
            
            // astronautData.innerHTML = json[i].firstName
            //                             json[i].hoursInSpace
            //                             json[i].active
            //                             json[i].skills[];


            for (let i = 0; i < json.length; i++) {

            astronautData.innerHTML += `
<div class="astronaut">
   <div class="bio">
      <h3>${json[i].firstName}</h3>
      <ul>
         <li>Hours in space: ${json[i].hoursInSpace}</li>
         <li class = ${json[i].active}>Active: ${json[i].active}</li>
         <li>Skills: ${json[i].skills}</li>
      </ul>
   </div>
   <img class="avatar" src="${json[i].picture}">
</div>
`
             };
             astronautData.innerHTML += `Total Number of Astronauts: ${json.length}`
        });
    });
});
