import React from "react";
import { RecentSearchesContainer, RecentSearchesTitleAndBtn, ClearButton, RdecentBody, SearchItem, DeleteItemButton } from "./RecentSearches-style";
import ExitIcon from '../../assets/Icons/exit.svg';
import Button from "../Button/Button";
import {buttonType} from '../../Utils/Constances';

const RecentSearches = () => {

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
                 RECENT SEARCHES
                <Button className={buttonType.textButton} btnText="CLEAR" ></Button>
            </RecentSearchesTitleAndBtn>
            
            <RdecentBody>
                {showLastSearches()}
            
            </RdecentBody>
            
        </RecentSearchesContainer>
    );

}

export default RecentSearches;