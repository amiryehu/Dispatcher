import React from "react";
import styled from "styled-components";
import { colors, cardrRadius, cardShadow } from "../../Utils/Constances";

export const RecentSearchesContainer = styled.div`
    font-family: 'Roboto';
    max-height: 22vh;
    min-height: 18vh;
    width: 623px;
    display: flex;
    gap: 20px;
    padding: 10px;
    flex-direction: column;
    color: ${colors.darkGray};
    box-shadow: ${cardShadow};
    border-radius: ${cardrRadius};
    background-color: ${colors.white};
    overflow: scroll;
`

export const  RecentSearchesTitleAndBtn = styled.div`
    width: 100%;
    height: 15px;
    display: flex;
    font-size: 0.85rem;
    font-weight: 700;
    align-items: center;
    justify-content: space-between;
`
export const ClearButton = styled.button`
    border: none;
    font-weight: 700;
    color: ${colors.darkGray};
    background-color: ${colors.white};
`

export const RdecentBody = styled.div`
    width: 100%;
    display: flex;
    font-size: 0.65rem;
    font-weight: 400;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`
export const SearchItem = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    font-size: 0.85rem;
    font-weight: 400;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 0 10px;
`
export const DeleteItemButton = styled.img`
    height: 13.5px;
    width: 13.5px;
`