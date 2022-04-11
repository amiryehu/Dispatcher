import React from "react";
import { RecentSearchesContainer, RdecentHeader, ClearButton, RdecentBody, SearchItem, DeleteItemButton } from "./RecentSearches-style";
import ExitIcon from '../../assets/Icons/exit.svg';

const RecentSearches = () => {

    const recentSearch = ['amir', 'yehuda', 'ofek'];
    const click = () => {
        console.log('amir')
    }

    const showLastSearches = () => {
        return recentSearch.map((searchTitle, index) => (
            <>
                <SearchItem>
                    {searchTitle}
                    <DeleteItemButton src={ExitIcon} onClick={click}/>
                </SearchItem>
            </>
        ))
    }

    return (

        <RecentSearchesContainer>
            <RdecentHeader>
                <>RECENT SEARCHES</>
                <ClearButton >CLEAR</ClearButton>
            </RdecentHeader>
            
            <RdecentBody>
                {showLastSearches()}
            
            </RdecentBody>
            
        </RecentSearchesContainer>
    );

}

export default RecentSearches;