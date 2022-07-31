require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                <ol>
//                  <li>Name: ${json.name}</li>
//                  <li>Diameter: ${json.diameter}</li>
//                  <li>Star: ${json.star}</li>
//                  <li>Distance from Earth: ${json.distance}</li>
//                  <li>Number of Moons: ${json.moons}</li>
//              </ol>
//              <img src="${json.image}">
    */
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (testInput === Number) {
        return "Is a Number";
    } else if (isNaN(testInput) === true) {
        return "Not a Number";
    }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!")
    } 
    else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!")
    }
    else if (validateInput(pilot) === "Not a Number" || validateInput(copilot) === "Not a Number" || validateInput(fuelLevel) === "Is a Number" || validateInput(cargoLevel) === "Is a Number") {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot} is ready for launch`;
    }
    if (fuelLevel < 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "Red";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
    } 
    if (fuelLevel >= 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = "Green";
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    }
};

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(json){
        console.long(json[2]);
        });
        return response        
    });
    console.log("Planets Returned are: " + planetsReturned)
    return planetsReturned;
};

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;