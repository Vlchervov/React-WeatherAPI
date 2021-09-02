import React, { useState } from "react";
import axios from "axios";
import { Transition } from "react-transition-group";
import { SearchButton, FormSearch, Modal, ModalBody } from "./App.styled";

function App() {
  const [data, setData] = useState({
    city: "",
    description: "",
    temp: "",
    feels_like: "",
  });

  const [value, setValue] = useState('');
  const [formIsVisible, setVisible] = useState(false);
  const API = "d66b09610a9b8b08f74f0704cf59ba05";

  const getWeather = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},ru/en&APPID=${API}&units=metric&lang=ru`
      )
      .then((res) => {
        setData({
          weather: res.data.weather[0].description,
          city: res.data.name,
          temp: Math.round(res.data.main.temp),
          feels_like: Math.round(res.data.main.feels_like),
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <FormSearch
        onSubmit={(e) => {
          e.preventDefault();
          if (value) {
            setVisible(true)
            getWeather(value)
          }
        }}
      >
        <input
          value={value}
          placeholder="введите город..."
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </FormSearch>
      <SearchButton
      // onClick={() => {
      //   if (value !== '') {
      //     setVisible(false)
      //   } else {
      //     setVisible(true)
      //     getWeather(value)
      //   }
      // }}
      >
        Найти
      </SearchButton>

      <Transition in={formIsVisible} timeout={3} mountOnEnter unmountOnExit>
        {() => (
          <Modal>
            <ModalBody>
              <ul>
                <li>Город: {data.city}</li>
                <li>Сейчас: {data.weather}</li>
                <li>Температура: {data.temp} градусов</li>
                <li>Ощущается как: {data.feels_like}</li>
              </ul>
              <button onClick={() => setVisible(false)}>закрыть</button>
            </ModalBody>
          </Modal>
        )}
      </Transition>
    </>
  );
}

export default App;
