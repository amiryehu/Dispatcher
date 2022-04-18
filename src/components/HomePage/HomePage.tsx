import React from "react";
import { HomePageContainer } from "./HomePage-style";
import Header from "../Header/Header";
import Body from "../MainContent/MainContent";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Header/>
      <Body/>
    </HomePageContainer>
  );
};

export default HomePage;