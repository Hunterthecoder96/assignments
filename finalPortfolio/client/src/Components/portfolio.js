import WeatherImage from '../Assets/weather app 2.PNG';
import memeGene from '../Assets/Meme Generator pic.PNG';
import rollDice from '../Assets/Roll Dice App.PNG';

export default [
  {
    title: 'MEME GENERATOR',
    img: memeGene,
    stack: [
      'Loads random meme from an API and allows you to input a top text and bottom text then save your meme.  Also allows you to edit and delete',
    ],
  },
  {
    title: 'Roll Dice',
    img: rollDice,
    stack: [
      'interactive dice game which you click the roll button and it gives you a random selection of two dice. Fun app which I have used with my friends',
    ],
  },
  {
    title: 'Weather App',
    img: WeatherImage,
    stack: [
      'Uses OpenWeather API to display current weather and five day forecast for virtually any location in the world.  Also has a blog section which users can give a weather story of the weather in their area.',
    ],
  },
];
