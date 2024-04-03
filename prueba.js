
let reportJokes = [];


const jokeText = document.querySelector('.joke');
const jokeBtn = document.querySelector('.btn');
const faceButtons = document.querySelectorAll('.btn1');
let icono = document.getElementById('icono') 

document.addEventListener("DOMContentLoaded", getJoke);

jokeBtn.addEventListener('click', getJoke);

getJoke();

async function getJoke() {
    const config = await fetch('https://icanhazdadjoke.com',{
        headers: {
            Accept: 'application/json',
        }
    });

   
    const jokeObject = await config.json();

    jokeText.innerHTML = jokeObject.joke;
       
}

function registerScore(score) {
    const currentDate = new Date().toISOString();
    reportJokes.push({
        joke: jokeText.innerHTML,
        score: score,
        date: currentDate
    });
    console.log(reportJokes);
}

faceButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        registerScore(index + 1); 
    });
});

getJoke();

async function getWeatherInfo() {
    try {
        const response = await fetch('https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019');
        const weatherData = await response.json();
        const weatherInfo = document.getElementById('weather-data');
        weatherInfo.innerHTML = `<strong> ${weatherData.municipio.NOMBRE} </strong>, <strong> ${weatherData.temperatura_actual} ºC </strong>`;
        console.log(weatherData.stateSky.description)

        
                switch (weatherData.stateSky.description) {
                    case 'Despejado':
                      icono.src='img/sol.png'
                      console.log('SOL');
                        break;
                    case 'Poco nuboso':
                      icono.src='img/nublado.png'
                      console.log('NUBLADO');
                        break;
                    case 'Muy nuboso':
                      icono.src='img/nublado.png'
                      console.log('muy NUBLADO');
                        break;
                    case 'Nuboso':
                       icono.src='img/nubes.png'
                       console.log('muy NUBOSO');
                        break;
                    case 'Cubierto':
                       icono.src='img/nublado.png'
                       console.log('muy NUBLADO');
                        break;
                    case 'Cubierto con lluvia escasa':
                       icono.src='img/tormenta.png'
                       console.log('LLUEVE');
                        break;
                    case 'Tormenta':
                       icono.src='img/lluvia.png'
                       console.log('LLUEVE MUCHO');
                        break;
                    default:
                      icono.src='img/sol.png'
                      console.log('por defecto');
                  }

    } catch (error) {
        console.error('Error al obtener la información del tiempo:', error);
    }
}

// Agregar event listeners para obtener un chiste y la información del tiempo al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    getJoke();
    getWeatherInfo();



    
});


document.getElementById('getjoke').addEventListener('click', getJoke);


