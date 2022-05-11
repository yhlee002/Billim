import './App.css';
import {useEffect, useState} from "react";
import MainHeader from "./components/Header";
import MainPage from "./components/Content";
import MainFooter from "./components/Footer";

function App() {
  const [message, setMessage]=useState([]);
  useEffect(()=>{
    fetch("/main")
        .then((res)=>{
          return res.json();
        })
        .then((data)=>{
          setMessage(data);
        });
  },[]);
  return (
    <div className="App">
        <MainHeader className="header"></MainHeader>
        <MainPage></MainPage>
        <MainFooter className="footer"></MainFooter>

    </div>

  );
}

export default App;

