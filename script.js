const celsiusInput = document.getElementById('celsius');
const kelvinInput = document.getElementById('kelvin');
const fahrenheitInput = document.getElementById('fahrenheit');

function convertFromCelsius(){
    const celsius = Number(celsiusInput.value);
    let fahrenheit = (celsius * (9/5)) + 32;
    let kelvin = celsius + 273.15;    
    kelvinInput.value = kelvin.toFixed(2);   
    fahrenheitInput.value = fahrenheit.toFixed(2); 
}

function convertFromKelvin(){
    const kelvin = Number(kelvinInput.value);
    const fahrenheit = (kelvin - 273.15) * (9/5) + 32;
    const celsius = kelvin - 273.15;
    fahrenheitInput.value = fahrenheit.toFixed(2);
    celsiusInput.value = celsius.toFixed(2);    
}

function convertFromFahrenheit(){
    const fahrenheit = Number(fahrenheitInput.value);
    const  celsius = (fahrenheit - 32) * (5/9);
    const kelvin = (fahrenheit - 32) * (5/9) + 273.15;
    celsiusInput.value = celsius.toFixed(2);
    kelvinInput.value = kelvin.toFixed(2);
}

fahrenheitInput.addEventListener('input', convertFromFahrenheit)
celsiusInput.addEventListener('input', convertFromCelsius);
kelvinInput.addEventListener('input', convertFromKelvin)