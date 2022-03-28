import React from "react";
import './App.css';
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import BasicSelect from "./components/Filter/Filter";
import LogIn from "./components/Login/LogIn";
import Avatar from "./components/Avatar/Avatar";
import SearchForm from "./components/Search/Search";
import Settings from './components/Header/Settings';
import Notifications from './components/Header/Notifications';

import data from './mockData/mockData.json';
import Header from "./components/Header/Header";

const name = data.articles[0].source.name;
const title = data.articles[0].title;
const description = data.articles[0].description;
const url = data.articles[0].url;
const urlToImage = data.articles[0].urlToImage;
const publishedAt = data.articles[0].publishedAt;
const content = data.articles[0].content;

function App() {

  return (
    <div>
      {/* <Card urlToImage={urlToImage} publishedAt={publishedAt} title={title} name={name} description={description} url={url}></Card> */}
      {/* <BasicSelect title="Source" items={['a','b','c']}></BasicSelect> */}
      {/* <LogIn/> */}
      {/* <Avatar userName="ofek ben david amir yehuda"/> */}
      {/* <SearchForm/> */}
      <Header/>
      {/* <Settings/> */}
      {/* <Notifications/> */}
      
    </div>
  );
}

export default App;