## #boraCodar - Uma página de clima

##### Challenge #10

### About this project

Project for ReactJS study purposes, where I take advantage of Rocketseat's #boraCodar 10 front-end challenge to create a weather web app.
In this project, I made integrations with APIs to capture location and weather information.
I used [weatherapi.com](https://www.weatherapi.com) and [opencagedata.com](https://opencagedata.com) apis.

One of the great challenges of this project was to find the mathematical formula to position the sun on the graph and for that I had the help of a dear and great friend, professor of mathematics, André Penedo. 💚👊

### Online version

See: [https://leandroparice-boracodar10.netlify.app/](https://leandroparice-boracodar10.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/f1fae81b-52a6-4b62-82a7-f9df1831a912/deploy-status)](https://app.netlify.com/sites/leandroparice-boracodar10/deploys)

### Instalation

- Install the dependencies with NPM.

```
npm install
```

- Create an account on [weatherapi.com](https://www.weatherapi.com) and [opencagedata.com](https://opencagedata.com) services to get your API keys

- Create a .env file in root folder and put this variebles with your API KEYS.

```
VITE_WEATHERAPI_KEY=YOUR_API_KEY
VITE_OPENCAGEDATA_KEY=YOUR_API_KEY
```

- To start the project on your machine using NPM.

```
npm run dev
```

- To build the project using NPM.

```
npm run build
```

- Build command in Netlify.

```
echo -e "VITE_WEATHERAPI_KEY=YOUR_API_KEY\nVITE_OPENCAGEDATA_KEY=YOUR_API_KEY" > .env && npm run build
```

### Technologies / Programming languages

- HTML
- CSS
- Javascript
- ReactJS
- Vite
- Sass
- JSX
- GitHub
- Netlify
- Api weatherapi.com
- Api opencagedata.com

### Improvements

- Responsive ✔️
- Get location ✔️
- Get weather information ✔️

### About #boraCodar

#boraCodar is a [Rocketseat](https://rocketseat.com.br) project in which, weekly, a layout is presented so that your front-end code can be made, for more information, see: [rocketseat.com.br/boracodar](https://rocketseat.com.br/boracodar)

### About this challenge

See: [rocketseat - 10](https://www.rocketseat.com.br/boracodar/desafios-anteriores/uma-pagina-de-clima-desafio-10)

### Licence

[MIT](https://choosealicense.com/licenses/mit/)
