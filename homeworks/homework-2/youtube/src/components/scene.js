import React, { Component } from "react";

export class Scene extends Component {
    render() {
        
        if (!this.props.video) {
            return (
                <h3>Loading...</h3>
            )
        };

        const { id, snippet } = this.props.video;
        const { videoId } = id;
        const { title, thumbnails, description } = snippet;
        const src = "https://www.youtube.com/embed/" + videoId;

        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="random" src={src} />
                </div>

                <div className="details">
                    <div>{title}</div>
                    <div>{description}</div>
                </div>
            </div>
        );

    }
}
