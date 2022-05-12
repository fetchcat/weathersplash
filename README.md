# WeatherSplash App

Weather App (Vanilla JS)

Made with modern JavaScript and utilizes the OpenWeatherMap API to deliver current weather (in both Celcius and Fahrenheit) based on your current location (via browser location services). It displays current weather data as well as an 8 day extended forecast. Great for browser home page!

## Notes

Be sure to create a src/.env file set the following Environment Variable for development mode.

1. API_KEY (OpenWeatherMap.org API Key)
2. PORT (Default is 5000)

## Scripts

To start development environment (with WebPack)

> yarn dev

To build application for production

> yarn build

## Deploy to GCP App Engine

1. Copy "example.app.yaml" to "app.yaml"
2. Update API_KEY and make sure that app.yaml is included in .gitignore and NOT being pushed to git or other version control.
3. Deploy App
   > gcloud app deploy

## Tags

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)
