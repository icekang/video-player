import React, { Component } from 'react';
import SideBar from './sidebar';
import SearchBar from './search_bar';

class TopBar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='top-container'>
                <SideBar />
                <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
            </div>
        );
    }
}
export default TopBar;