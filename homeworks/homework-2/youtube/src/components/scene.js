import React, {Component} from 'react';

export class Scene extends Component {
	render() {
		return (
				<div class="video-detail col-md-8">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe title="random" src="https://www.youtube.com/embed/7GSgWzmR_-c"></iframe>
                    </div>

                    <div class="details">
                        <div>TITLE</div>
                        <div>DESCRIPTION</div>
                    </div>
                </div>
			)
	}
}