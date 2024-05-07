// App.js

// import React from 'react';
// import Chatbot from './component/Chatbot';

// function App() {
//   return (
//     <div className="App">
//       <header className="bg-blue-500 text-white text-center p-4">
//         <h1 className="text-2xl">Chatbot App</h1>
//       </header>
//       <main className="container mx-auto p-4">
//         <Chatbot />
//       </main>
//     </div>
//   );
// }

// export default App;




import React from 'react';
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';
import { Provider } from 'react-redux';
// import store from './store';
import Store from './component/Store';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Provider store={Store}>
      <Container maxWidth="sm">
        <TaskInput />
        <TaskList />
      </Container>
    </Provider>
  );
}

export default App;




















// import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// import Account from "./component/Account";
// import Login from "./component/Login";
// import SignIn from "./component/SignIn";
// import PopXForm from "./component/PopXForm";
// export default function App(){
//   return(
//   <Router>
//     <Routes>
//       <Route element={<Account/>} path={"/account"}/>
//       <Route element={<Login/>} path={"/login"}/>
//       <Route element={<SignIn/>} path={"/signin"}/>
//       <Route element={<PopXForm/>} path={"/popxform"}/>

//     </Routes>
//   </Router>  
//   )
// }



























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import CityTable from './component/CityTable';
// import CityWeather from './component/CityWeather';
// import SearchBar from './component/SearchBar';
// const App = () => {
//   const [cities, setCities] = useState([]);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchCities();
//   }, []);

//   const fetchCities = async () => {
//     try {
//       const response = await axios.get('https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-1000/api/');
//       setCities(response.data);
//     } catch (error) {
//       setError('Failed to fetch cities data');
//     }
//   };

//   const fetchWeather = async (cityName) => {
//     try {
//       const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=mohit`);
//       setWeatherData(response.data);
//     } catch (error) {
//       setError('Failed to fetch weather data');
//     }
//   };

//   const handleCityClick = (cityName) => {
//     setSelectedCity(cityName);
//     fetchWeather(cityName);
//   };

//   const handleSearch = (searchQuery) => {
//     setSelectedCity(null);
//     setError(null);
//     fetchWeather(searchQuery);
//   };

//   return (
//     <div>
//       <h1>Weather Forecast App</h1>
//       <SearchBar onSearch={handleSearch} />
//       {error && <div>{error}</div>}
//       <div style={{ display: 'flex' }}>
//         <CityTable cities={cities} onCityClick={handleCityClick} />
//         {selectedCity && <CityWeather city={selectedCity} weatherData={weatherData} />}
//       </div>
//     </div>
//   );
// };

// export default App;
