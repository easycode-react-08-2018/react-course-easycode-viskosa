import React, { Component } from "react";

export class OneVideoBlock extends Component {
    render() {
        const { id, snippet } = this.props.videoData;
        const { videoId } = id;
        const { title, thumbnails } = snippet;
        return (
            <li className="list-group-item">
                <div className="video-list media">
                    <div className="video-list media">
                        <div className="media-left">
                            <img
                                className="media-object"
                                src={thumbnails.default.url}
                            />
                        </div>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{title}</div>
                    </div>
                </div>
            </li>
        );
    }
}
