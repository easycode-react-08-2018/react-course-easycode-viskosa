import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Scene} from './components/scene.js';
import {OneVideoBlock} from './components/one-video-block.js';
/*import YouTubeSearch from 'youtube-api-search';

const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

YouTubeSearch({ key: API_KEY, term: 'matrix' }, data => {
  console.log(data);

  // videoId - https://www.youtube.com/embed/:videoId
});*/

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>Document</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
                  integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous"/>
        </head>

        <body>
        <main class="container">

            <div class="search-bar navbar">
                <input type="text" placeholder="Search" />
            </div>

            <div class="row">
                <Scene />
                {/*<div class="video-detail col-md-8">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe title="random" src="https://www.youtube.com/embed/7GSgWzmR_-c"></iframe>
                    </div>

                    <div class="details">
                        <div>TITLE</div>
                        <div>DESCRIPTION</div>
                    </div>
                </div>*/}

                <ul class="col-md-4 list-group">
                  <OneVideoBlock />
                    {/*<li class="list-group-item">
                        <div class="video-list media">
                            <div class="video-list media">
                                <div class="media-left">
                                    <img class="media-object" src="https://randomuser.me/api/portraits/thumb/men/7.jpg" />
                                </div>
                            </div>
                            <div class="media-body">
                                <div class="media-heading">SOME VIDEO</div>
                            </div>
                        </div>
                    </li>
                    */}
                </ul>

            </div>
        </main>

        </body>
      </React.Fragment>
    );
  }
}

export default App;
