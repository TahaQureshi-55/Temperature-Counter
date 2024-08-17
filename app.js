function convertTemperature() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result = '';

    if (isNaN(temp)) {
        result = 'Please enter a valid number';
    } else {
        switch (unit) {
            case 'celsius':
                result = `Fahrenheit: ${(temp * 9/5) + 32} °F\nKelvin: ${temp + 273.15} K`;
                break;
            case 'fahrenheit':
                result = `Celsius: ${(temp - 32) * 5/9} °C\nKelvin: ${(temp - 32) * 5/9 + 273.15} K`;
                break;
            case 'kelvin':
                result = `Celsius: ${temp - 273.15} °C\nFahrenheit: ${(temp - 273.15) * 9/5 + 32} °F`;
                break;
            default:
                result = 'Unknown unit';
                break;
        }
    }

    document.getElementById('result').innerText = result;
}
