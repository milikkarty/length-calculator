let resultMiles = document.getElementById('miles');
let resultYards = document.getElementById('yards');
let resultFeet = document.getElementById('feet');
let resultInches = document.getElementById('inches');
let resultKilometers = document.getElementById('kilometers');
let resultMeters = document.getElementById('meters');
let resultCentimeters = document.getElementById('centimeters');

function fromMiles () {
    let miles = document.getElementById('miles').value;

    resultYards.value = +(miles * 1760).toFixed(1); // unary plus to make it a number back again after .toFixed
    resultFeet.value = +(miles * 5280).toFixed(1);
    resultInches.value = +(miles * 63360).toFixed(1);
    resultKilometers.value = +(miles * 1.609344).toFixed(2);
    resultMeters.value = +(miles * 1609.344).toFixed(1);
    resultCentimeters.value = +(miles * 160934.4).toFixed(1);
}

function fromYards () {
    let yards = document.getElementById('yards').value;

    resultMiles.value = +(yards / 1760).toFixed(4);
    resultFeet.value = +(yards * 3).toFixed(1);
    resultInches.value = +(yards * 36).toFixed(1);
    resultKilometers.value = +(yards * 0.000914).toFixed(4);
    resultMeters.value = +(yards * 0.9144).toFixed(1);
    resultCentimeters.value = +(yards * 91.44).toFixed(1);
}

function fromFeet () {
    let feet = document.getElementById('feet').value;

    resultMiles.value = +(feet / 5280).toFixed(4);
    resultYards.value = +(feet / 3).toFixed(1);
    resultInches.value = +(feet * 12).toFixed(1);
    resultKilometers.value = +(feet * 0.000305).toFixed(4);
    resultMeters.value = +(feet * 0.3048).toFixed(1);
    resultCentimeters.value = +(feet * 30.48).toFixed(1);
}

function fromInches () {
    let inches = document.getElementById('inches').value;

    resultMiles.value = +(inches / 63360).toFixed(5);
    resultYards.value = +(inches / 36).toFixed(2);
    resultFeet.value = +(inches / 12).toFixed(2);
    resultKilometers.value = +(inches * 0.0000254).toFixed(5);
    resultMeters.value = +(inches * 0.0254).toFixed(2);
    resultCentimeters.value = +(inches * 2.54).toFixed(1);
}

function fromKilometers () {
    let kilometers = document.getElementById('kilometers').value;

    resultMiles.value = +(kilometers * 0.621371).toFixed(2);
    resultYards.value = +(kilometers * 1093.613298).toFixed(1);
    resultFeet.value = +(kilometers * 3280.839895).toFixed(1);
    resultInches.value = +(kilometers * 39370.07874).toFixed(1);
    resultMeters.value = +(kilometers * 1000).toFixed(1);
    resultCentimeters.value = +(kilometers * 100000).toFixed(1);
}

function fromMeters () {
    let meters = document.getElementById('meters').value;

    resultMiles.value = +(meters * 0.000621).toFixed(4);
    resultYards.value = +(meters * 1.093613).toFixed(1);
    resultFeet.value = +(meters * 3.28084).toFixed(1);
    resultInches.value = +(meters * 39.370079).toFixed(1);
    resultKilometers.value = +(meters / 1000).toFixed(3);
    resultCentimeters.value = +(meters * 100).toFixed(1);
}

function fromCentimeters () {
    let centimeters = document.getElementById('centimeters').value;

    resultMiles.value = +(centimeters * 0.0000062137).toFixed(6);
    resultYards.value = +(centimeters * 0.010936).toFixed(2);
    resultFeet.value = +(centimeters / 30.48).toFixed(2);
    resultInches.value = +(centimeters / 2.54).toFixed(1);
    resultKilometers.value = +(centimeters / 100000).toFixed(5);
    resultMeters.value = +(centimeters / 100).toFixed(2);
}