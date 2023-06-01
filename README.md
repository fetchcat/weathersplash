# WeatherSplash App

Weather App (Vanilla JS)

Made with modern JavaScript and utilizes the OpenWeatherMap API to deliver current weather (in both Celcius and Fahrenheit) based on your current location (via browser location services). It displays current weather data and can be deployed via Node.js or Docker.

## Development

1. Copy .env.example file to .env and add desired port and OpenWeatherMap API Key.

## Scripts

To start development environment (with WebPack)

> yarn dev

To build application for production

> yarn build

## Deploy with Docker Container

1. Build image with `docker build -t weathersplash .` from app's root directory. Upload to favourite container repository and use same environment variables as in development.

## Deploy with Node.js

1. Run `yarn run deploy`

## Tags

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![Debian](https://img.shields.io/badge/Debian-D70A53?style=for-the-badge&logo=debian&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
