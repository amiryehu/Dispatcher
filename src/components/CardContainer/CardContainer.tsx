import React, { useCallback, useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import { CardContainerStyle } from "./CardContainer-style";
import { ICard } from "../../Utils/Types";
import {
  API_KEY,
  COUNTRY,
  Endpoint,
  ENDPOINT,
} from "../../store/Utils/storeConstances";
import { fetchFromApi, fetchFromApiScroll } from "../../store/Utils/index";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import {
  EVERYTHING_URL,
  TOP_HEADLINES_URL,
} from "../../store/Utils/storeConstances";
import { articlesActions } from "../../store/reducers/articlesReducer";
import notFound from "../../assets/Icons/not-found.svg";
import { filtersActions } from "../../store/reducers/filterReducer";
import { TailSpin } from "react-loader-spinner";
import { Loading } from "../DataCard/DataCard-style";

const CardContainer = () => {
  let url = "";
  const dispatch = useAppDispatch();
  const filtersState = useAppSelector((state: RootState) => state.filters);
  const articles = useAppSelector(
    (state: RootState) => state.apiArticlesResponse.articles
  );
  const totalResult = useAppSelector(
    (state: RootState) => state.apiArticlesResponse.totalResults
  );
  const pageNumber = useAppSelector(
    (state: RootState) => state.apiArticlesResponse.currentPage
  );
  const isLoading = useAppSelector(
    (state) => state.apiArticlesResponse.isLoading
  );

  const observer: any = useRef();
  const lastArticleRef = useCallback((node) => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (pageNumber) {
          dispatch(articlesActions.setCurrentPage(() => pageNumber + 1));
        }
      }
    });
    if (node) {
      observer.current.observe(node);
    }
  }, []);

  useEffect(() => {
    if (filtersState.Endpoint === Endpoint.TopHeadlines) {
      url = `${TOP_HEADLINES_URL}?sources=${filtersState.Sources}&q=${
        filtersState.valueInSearch
      }&page=${pageNumber}&pageSize=${10}&country=${
        filtersState.Country
      }&category=${filtersState.Category}&apiKey=${API_KEY}`;
    } else {
      url = `${EVERYTHING_URL}?q=${filtersState.valueInSearch}&sources=${
        filtersState.Sources
      }&page=${pageNumber}&pageSize=${10}&from=${filtersState.Dates.from}&to=${
        filtersState.Dates.to
      }&sortBy=${filtersState.SortBy}&language=${
        filtersState.Language
      }&apiKey=${API_KEY}`;
    }
    dispatch(fetchFromApiScroll(url));
  }, [pageNumber]);

  useEffect(() => {
    dispatch(filtersActions.setTotalResOrTopHedline(false));
    dispatch(articlesActions.setClearArticles());
    if(filtersState.Endpoint === Endpoint.Everything &&  filtersState.valueInSearch === ""){
      setTimeout(() => {
        
        dispatch(articlesActions.setIsLoading(false))
      }, 250);
    }
    if (filtersState.Endpoint === Endpoint.TopHeadlines) {
      url = `${TOP_HEADLINES_URL}?sources=${filtersState.Sources}&q=${
        filtersState.valueInSearch
      }&page=${pageNumber}&pageSize=${10}&country=${
        filtersState.Country
      }&category=${filtersState.Category}&apiKey=${API_KEY}`;
    } else {
      url = `${EVERYTHING_URL}?q=${filtersState.valueInSearch}&sources=${
        filtersState.Sources
      }&page=${pageNumber}&pageSize=${10}&from=${filtersState.Dates.from}&to=${
        filtersState.Dates.to
      }&sortBy=${filtersState.SortBy}&language=${
        filtersState.Language
      }&apiKey=${API_KEY}`;
    }
    dispatch(fetchFromApi(url));
  }, [
    filtersState.Endpoint,
    filtersState.Category,
    filtersState.Country,
    filtersState.Sources,
    filtersState.Language,
    filtersState.SortBy,
    filtersState.Dates,
    filtersState.valueInSearch,
  ]);

  const renderLoader = () => {
    return (
      <Loading>
        <TailSpin height="50" width="50" color="grey" ariaLabel="loading" />
        <text style={{ fontFamily: "Mulidh", fontSize: "1.2rem" }}>
          Loading...
        </text>
      </Loading>
    );
  };

  const presentArticles = () => {
    // if (isLoading) return renderLoader();
    return articles.map((article: ICard, index: number) => {
      if (articles.length === index + 1) {
        return (
          <div ref={lastArticleRef}>
            <Card article={article} key={index} />{" "}
          </div>
        );
      } else {
        return <Card article={article} key={index} />;
      }
    });
  };

  return (
    <CardContainerStyle>
      {!articles || articles.length === 0 ? (
        <>
          {isLoading && renderLoader()}
          {!isLoading && (
            <img src={notFound} style={{ height: "20vh", marginTop: "34vh" }} />
          )}
        </>
      ) : (
        <>{presentArticles()}</>
      )}
    </CardContainerStyle>
  );
};
export default CardContainer;

// {

// <>
//   {filtersState.Endpoint == Endpoint.TopHeadlines && presentArticles()}
//   {/* {filtersState.Endpoint == Endpoint.Everything &&
//     filtersState.valueInSearch === "" && (
//       <img src={notFound} style={{ height: "23vh", marginTop: "30vh" }}/>
//   )} */}
//   {filtersState.Endpoint == Endpoint.Everything &&
//     filtersState.valueInSearch !== "" &&
//     presentArticles()}
// </>
// }
