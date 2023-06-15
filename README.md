# WeatherSplash

![WeatherSplash Screenshot](https://my-portfolio-screens.s3.ca-central-1.amazonaws.com/weathersplash/weathersplash-screen-lg.png)

Made with modern JavaScript and utilizes the OpenWeatherMap API to deliver current weather (in both Celcius and Fahrenheit) based on location name or current location (via browser location services). It displays current weather data and can be easily deployed via Docker Compose.

## Scripts

In root app directory, run `yarn run install-dependencies` to install both backend and frontend dependencies. Necessary for development or production.

When ready to deploy application via docker compose, run `yarn run deploy`

## Development

Copy example.env file to .env and add your OpenWeatherMap API Key.

## Deploy to Production with Docker

1. Copy example.docker-compose.yml to docker-compose.yml
2. Add OpenWeatherMap API_KEY to environment section
3. (Optional)Change port depending on your use case - default is 5000
4. Build and deploy image with `yarn run deploy` from app's root directory

## Tags

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
