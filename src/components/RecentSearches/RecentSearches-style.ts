import React from "react";
import styled from "styled-components";
import { colors, cardrRadius, cardShadow } from "../../Utils/Constances";

export const RecentSearchesContainer = styled.div`
    font-family: 'Roboto';
    height: 22vh;
    width: 623px;
    display: flex;
    gap: 20px;
    padding: 10px;
    transition: 500ms;
    flex-direction: column;
    color: ${colors.darkGray};
    box-shadow: ${cardShadow};
    border-radius: ${cardrRadius};
    background-color: ${colors.white};
`
export const RdecentHeader = styled.div`
    width: 100%;
    height: 15px;
    display: flex;
    font-size: 0.85rem;
    font-weight: 700;
    align-items: center;
    justify-content: space-between;
    `
export const ClearButton = styled.div``

export const RdecentBody = styled.div`
    width: 100%;
    height: 120px;
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