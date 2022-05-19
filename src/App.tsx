import React, { useEffect } from "react";
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import LogIn from "./components/Login/LogIn";
import { RootState, useAppDispatch, useAppSelector } from "./store/store";
import { filtersActions } from "./store/reducers/filterReducer";
import { Endpoint } from "./store/Utils/storeConstances";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



function App() {
  const dispatch = useAppDispatch();
  const filtersState = useAppSelector((state: RootState) => state.filters);

  // const totalResOrTopHedline = useAppSelector(state => state.filters.totalResOrTopHedline);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
    .then( res => res.json())
    .then(response => {
      if(filtersState.Endpoint === Endpoint.TopHeadlines){
        const countryName = response.country_name;
        const currentLocation = response.country_code.toLowerCase();

        dispatch(filtersActions.setCountry(currentLocation));
        dispatch(filtersActions.setCountryName(countryName));
        dispatch(filtersActions.setTotalResOrTopHedline(true));
      }
    })
    .catch((data) => {
      console.log('Request failed:', data);
    });
  },[])
  
  return (
    <HomePage/>
    // <LogIn/>
  );
}

export default App;