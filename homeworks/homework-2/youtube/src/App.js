import React, { Component } from "react";
import logo from "./logo.svg";

import "./App.css";
import { Scene } from "./components/scene.js";
import { OneVideoBlock } from "./components/one-video-block.js";
import { Input } from "./components/input.js";
import YouTubeSearch from "youtube-api-search";

const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

class App extends Component {
    constructor() {
        super();

        this.state = {
            inputValue: "",
            mainVideo: {},
            restVideos: [],
        };
    }

    inputChange = event => {
        this.setState({
            inputValue: event.target.value
        });
        this.searchFunction();
    };

    searchFunction = () => {
        const { inputValue } = this.state;
        YouTubeSearch({ key: API_KEY, term: inputValue }, data => {
            //console.log(data);
           const [firstVideo, ...rest] = data;
           const mainVideo = firstVideo;
           const restVideos = rest;

           this.setState({
            mainVideo,
            restVideos
           })

            console.log(this.state.mainVideo);
            console.log(this.state.restVideos);
            // videoId - https://www.youtube.com/embed/:videoId
        });
    };

    render() {
        const { inputValue } = this.state;



        return (
            <main class="container">
                <Input inputChange={this.inputChange} value={inputValue} />

                <div class="row">
                    <Scene />

                    <ul class="col-md-4 list-group">
                        <OneVideoBlock />
                    </ul>
                </div>
            </main>
        );
    }
}

export default App;
