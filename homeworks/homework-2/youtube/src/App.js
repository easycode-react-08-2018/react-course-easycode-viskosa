import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Scene } from "./components/scene.js";
import { Input } from "./components/input.js";
import { Aside } from "./components/aside.js";
import YouTubeSearch from "youtube-api-search";

const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

class App extends Component {
    constructor() {
        super();

        this.state = {
            inputValue: "",
            mainVideo: null,
            restVideos: []
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
            });
        });
    };

    render() {
        const { inputValue, mainVideo, restVideos } = this.state;

        return (
            <main className="container">
                <Input inputChange={this.inputChange} value={inputValue} />

                <div className="row">
                    <Scene video={mainVideo} />
                    <Aside videos={restVideos} />
                </div>
            </main>
        );
    }
}

export default App;
