import React, { Component } from "react";
import { OneVideoBlock } from "./one-video-block.js";

export class Aside extends Component {
    render() {
        const videos = this.props.videos;
        let videosArray = videos.map((video, i) => {
            return <OneVideoBlock key={i} videoData={video} />;
        });

        return <ul className="col-md-4 list-group">{videosArray}</ul>;
    }
}
