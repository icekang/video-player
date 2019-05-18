import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './App.css';
import SideBar from './components/sidebar';
import TopBar from './components/topbar';
const API_KEY = 'AIzaSyDEYgfpRWdRMfPa71-U_GOF_78JUdK3RLQ';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Avenger End Game');
  }

  videoSearch(searchTerm){
    YTSearch({key: API_KEY, term: searchTerm}, (data) => {
      console.log(data);
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }
  render(){
    return(
      <div className = "eiei">
        <SideBar />
        <div id="page-wrap" className = "left-column">
          <SearchBar onSearchTermChange={searchTerm=>this.videoSearch(searchTerm)}/>
          <VideoDetail video = {this.state.selectedVideo} />
        </div>
        <VideoList 
          onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
          videos = {this.state.videos} />
      </div>
    );
  }
}
export default App;
