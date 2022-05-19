import React from "react";
import { RecentSearchesContainer, RecentSearchesTitleAndBtn, ClearButton, RdecentBody, SearchItem, DeleteItemButton } from "./RecentSearches-style";
import ExitIcon from '../../assets/Icons/exit.svg';
import Button from "../Button/Button";
import {buttonType} from '../../Utils/Constances';
import { store } from "../../store/store";

const btnText = "CLEAR";

const RecentSearches = () => {
    const recentSearches = "RECENT SEARCHES";
    const recentSearch = ['amir', 'yehuda', 'ofek', 'amir', 'yehuda', 'ofek', 'amir', 'yehuda', 'ofek', 'amir', 'yehuda', 'ofek'];

    const onDeleteHandler = () => {
        console.log('Deleted');
    }
    const onClearAllHandler = () => {
        console.log('All Deleted');
    }

    const showLastSearches = () => {
        return recentSearch.map((searchTitle, index) => (
            <SearchItem>
                {searchTitle}
                <DeleteItemButton src={ExitIcon} onClick={onDeleteHandler}/>
            </SearchItem>
        ))
    }

    return (
        <RecentSearchesContainer>
            <RecentSearchesTitleAndBtn>
                 {recentSearches}
                <Button className={buttonType.textButton} btnText={btnText} ></Button>
            </RecentSearchesTitleAndBtn>
            
            <RdecentBody>
                {showLastSearches()}
            </RdecentBody>
        </RecentSearchesContainer>
    );

}

export default RecentSearches;