// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/


//TODO 1: set up an window load handler

window.addEventListener("load", function () {

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         const missionDestination = document.getElementById("missionTarget");
         const index = Math.floor(Math.random() * json.length);
         missionTarget.innerHTML = `
             <h2>Mission Destination</h2>
             <ul>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ul>
            <img src="${json[index].image}">
         `;


      });

      // let listedPlanetsResponse = myFetch();
      //  listedPlanetResponse.then (function(result) {

      //  }
      let form = document.querySelector("form")
      form.addEventListener("submit", function (event) {


         //let statusCheck = document.getElementById


         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");
         let pilotStatus = document.getElementById("pilotStatus");
         let copilotStatus = document.getElementById("copilotStatus");
         let fuelStatus = document.getElementById("fuelStatus");
         let launchStatus = document.getElementById("launchStatus");
         let itemstatus = document.getElementById("itemStatus");
         event.preventDefault();
         // let listedPlanets;

         //TODO 1: set up an window load handler

         //TODO 2:  set up a submit handler for the form

         //TODO 3: Cancel submission using event.preventDefault()

         //TODO 4 validate that all inputs have data

         //TODO 5 check fuel level and cargo Mass, and report launch status 
         
         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required.");
            event.preventDefault();

         }

         if (isNaN(pilotName.value) || isNaN(copilotName.value)) {
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready`;
            copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready`;

         }
         else {
            alert("Pilot & Co pilot names have to be letters and not numbers");
            event.preventDefault();

         }

         if (isNaN(fuelLevel.value) || isNaN(cargoMass.value) || fuelLevel.value.length == 0 || cargoMass.value.length == 0) {
            alert("Please enter Fuel level & Cargo Mass in integer form");
            event.preventDefault();
         
            
         }

         else {

            itemstatus.style.visibility = "visible"

            if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
               fuelStatus.innerHTML = `Not enough Fuel for the journey`;
               launchStatus.innerHTML = `Shuttle not ready for launch`;
               cargoStatus.innerHTML = `Cargo mass is not low enough for launch`;
               launchStatus.style.color = `Red`;

            }

            else if (fuelLevel.value < 10000) {
               fuelStatus.innerHTML = `Not enough Fuel for the journey`;
               launchStatus.innerHTML = `Shuttle not ready for launch`;
               cargoStatus.innerHTML = `Cargo mass is low enough for launch`;
               launchStatus.style.color = `Red`;
            }



            else if (cargoMass.value > 10000) {
               launchStatus.style.color = `Red`;
               cargoStatus.innerHTML = `Cargo mass is too much for the shuttle to take off`;
               fuelStatus.innerHTML = `Fuel level high enough for launch`;
               launchStatus.innerHTML = `Shuttle is not ready for launch`;



            }
            else if (fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
               launchStatus.style.color = `Green`;
               fuelStatus.innerHTML = `Fuel level high enough for launch`;
               cargoStatus.innerHTML = `Cargo mass low enough for launch`;
               launchStatus.innerHTML = `Shuttle is ready for launch`;


            }

        // }
      }

         //TODO 6 make the list visible 

         //TODO 7 fetch planet data 









      });
   });
});
