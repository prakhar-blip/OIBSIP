function convertTemperature() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var unit = document.getElementById('unit').value;
    var result = document.getElementById('result');

    if (isNaN(temperature)) {
        result.innerText = "Please enter a valid temperature!";
        return;
    }

    switch (unit) {
        case 'celsius':
            result.innerText = "Converted temperature: " + ((temperature * 9/5) + 32).toFixed(2) + "°F";
            break;
        case 'fahrenheit':
            result.innerText = "Converted temperature: " + ((temperature - 32) * 5/9).toFixed(2) + "°C";
            break;
        case 'kelvin':
            result.innerText = "Converted temperature: " + (temperature + 273.15).toFixed(2) + " K";
            break;
        default:
            result.innerText = "Please select a valid unit!";
    }
}