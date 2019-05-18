import React, { Component } from 'react';
import './search_bar.css';
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
        this.props.onSearchTermChange(event.target.value);
    }

    render(){
        return (
            <div className = "bar">
                {/* Input field has onChange */}
                <input
                placeholder=" Search"
                value = {this.state.term}
                onChange = {this.onInputChange} />
            </div>
        );
    }
}

export default SearchBar;