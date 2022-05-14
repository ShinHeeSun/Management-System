import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './APP.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './Components/Box';
import WeatherBox from './Components/WeatherBox';
import WeatherButton from './Components/WeatherButton';
import { Spinner } from 'react-bootstrap';
import Mainpage from './Components/page/Mainpage';
import LoginPage from './Components/page/LoginPage';
import Navbar from './Components/Navbar';
import ProductDetaill from './Components/ProductDetaill';
import { useNavigate } from 'react-router-dom';
import JoinPage from './Components/page/JoinPage';
import CartPage from './Components/page/CartPage';


const choice = {
  가위: {
    name: '가위',
    img: 'https://cdn.crowdpic.net/detail-thumb/thumb_d_4ABE250623ED062CF7DBB6CFB93E364E.jpg',
  },
  바위: {
    name: '바위',
    img: 'https://thumb.photo-ac.com/47/473ef77f5797ec0fd8619c5236c85fba_t.jpeg',
  },
  보: {
    name: '보',
    img: 'https://ac2-p.namu.la/20210312/aacdab74cabdf9aad51c7b80adef5ee0e3c5b0fa260c8d07d47c86820f512f1b.png?type=orig',
  },
};

// 위에는 가위바위보 스테이트

function App() {
  const navigate = useNavigate();
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const Home = () => {
    navigate('/');
  };

  const play = (userChoice) => {
    setUserChoice(choice[userChoice]);
    let computer = randomChoice();
    setComputerChoice(computer);
    setResult(결과(choice[userChoice], computer));
  };

  const 결과 = (user, computer) => {
    if (user.name === computer.name) return '무승부';
    else if (user.name === '가위')
      return computer.name === '바위' ? 'lose' : 'win';
    else if (user.name === '바위')
      return computer.name === '가위' ? 'win' : 'lose';
    else if (user.name === '보')
      return computer.name === '가위' ? 'lose' : 'win';
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  // 위에는 가위바위보 코드

  const [weather, setWeather] = useState(null);
  const citis = ['Paris', 'New York', 'Tokyo', 'Seoul'];
  const [city, setCity] = useState('');

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f0b6d42278f86fcefd612795e979c1cc&units=metric`;
    setLoading(true);
    let respone = await fetch(url);
    let data = await respone.json();
    setWeather(data);
    setLoading(false);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f0b6d42278f86fcefd612795e979c1cc&units=metric`;
    setLoading(true);
    let respone = await fetch(url);
    let data = await respone.json();
    setWeather(data);
    setLoading(false);
  };

  const onClick = (city) => {
    if (city === 'current') {
      setCity('');
    } else {
      setCity(city);
    }
  };

  useEffect(() => {
    if (city === '') {
      getCurrentLocation();
    } else {
      getCity();
    }
  }, [city]);

  // 위에는 날씨 함수
  

  const [loginCheck, setLoginCheck] = useState(false);

  return (
    <div className="App">
      <Navbar  setLoginCheck={setLoginCheck}
        loginCheck={loginCheck}/>
      <Routes>
        <Route path="/" element={<Mainpage 
 
        loginCheck={loginCheck} />}></Route>
        <Route
          path="/LoginPage"
          element={
            <LoginPage setLoginCheck={setLoginCheck} />
          }
        ></Route>
        <Route path="/JoinPage" element={<JoinPage />}>
        </Route>
        <Route path="/CartPage" element={<CartPage />}>
            </Route>
        <Route
          path="/Products/:id"
          element={<ProductDetaill />}
        ></Route>

        <Route
          path="/test1"
          element={
            <div>
              <button className="btn btn-danger" onClick={Home}>
                뒤로가기
              </button>
              <div className="main">
                <Box
                  title="user"
                  item={userChoice}
                  result={result}
                  play={play}
                />

                <Box
                  title="computer"
                  item={computerChoice}
                  result={result}
                  play={play}
                />
              </div>
              <div className="btnzip">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => play('가위')}
                >
                  가위
                </button>

                <button
                  className="btn btn-outline-primary"
                  onClick={() => play('바위')}
                >
                  바위
                </button>

                <button
                  className="btn btn-outline-primary"
                  onClick={() => play('보')}
                >
                  보
                </button>
              </div>
            </div>
          }
        ></Route>

        <Route
          path="/test2"
          element={
            <div>
              <button className="btn btn-danger" onClick={Home}>
                뒤로가기
              </button>
              {loading ? (
                <div className="weather">
                  {' '}
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>{' '}
                </div>
              ) : (
                <div className="weather">
                  <WeatherBox weather={weather} />
                  <WeatherButton
                    citis={citis}
                    setCity={setCity}
                    setWeather={setWeather}
                    onClick={onClick}
                  />
                </div>
              )}
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
