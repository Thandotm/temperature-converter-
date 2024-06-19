function convertTemperature() {
    const temperature = document.getElementById('temperatureInput').value;
    const conversionType = document.querySelector('input[name="conversionType"]:checked');
    const result = document.getElementById('result');

    if (!temperature || isNaN(temperature)) {
        result.innerText = 'Please enter a valid number for temperature.';
        return;
    }

    if (!conversionType) {
        result.innerText = 'Please select a conversion type.';
        return;
    }

    const tempValue = parseFloat(temperature);
    let convertedTemp;

    if (conversionType.value === 'toCelsius') {
        convertedTemp = (tempValue - 32) * 5 / 9;
        result.innerText = `${tempValue}°F is ${convertedTemp.toFixed(2)}°C`;
    } else if (conversionType.value === 'toFahrenheit') {
        convertedTemp = (tempValue * 9 / 5) + 32;
        result.innerText = `${tempValue}°C is ${convertedTemp.toFixed(2)}°F`;
    }
}
