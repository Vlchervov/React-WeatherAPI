import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";
import {
  SearchButton,
  FormSearch,
  Modal,
  ModalBody,
  WeatherList,
} from "./App.styled";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    city: "",
    temp: "",
    feels_like: "",
    weather: "",
  });

  const [change, setChange] = useState(false);
  const [value, setValue] = useState("");
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
      .catch(() => {
        if (value !== data.city) {
          alert("Такого города не существует. Попробуйте ещё раз");
          setChange(false)
        }
      });
  };

  return (
    <>
      <FormSearch
        onSubmit={(e) => {
          e.preventDefault();
          if (value.trim() === "") {
          } else {
            getWeather(value);
            setValue("");
            setChange(true)
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
        onClick={(e) => {
          e.preventDefault();
          if (value.trim() === "") {
          } else {
            getWeather(value);
            setValue("");
            setChange(true)
        }}}
      >
        Найти
      </SearchButton>
      <WeatherList change={change}>
        <ul>
          <li>Город: {data.city}</li>
          <li>Сейчас: {data.weather}</li>
          <li>Температура: {data.temp}°C</li>
          <li>Ощущается как: {data.feels_like}°С</li>
        </ul>
      </WeatherList>

      {/* <Transition in={formIsVisible} timeout={3} mountOnEnter unmountOnExit>
        {() => (
          <Modal>
            <ModalBody>
              <ul>
                <li>Город: {data.city}</li>
                <li>Сейчас: {data.weather}</li>
                <li>Температура: {data.temp}°C</li>
                <li>Ощущается как: {data.feels_like}°С</li>
              </ul>
              <button
                onClick={() => {
                  setVisible(false);
                }}
              >
                закрыть
              </button>
            </ModalBody>
          </Modal>
        )}
      </Transition> */}
    </>
  );
}

export default App;
