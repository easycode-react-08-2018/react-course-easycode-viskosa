import React, { Component } from "react";

const initialStyle = {
    width: "400px",
    height: "400px",
    background: "pink",
    margin: "50px auto"
};

export class Box extends Component {
    constructor() {
        super();

        this.state = {
            blockStyle: initialStyle
        };
    }
    componentDidMount() {
        window.addEventListener("resize", event => {
            const height = window.innerHeight;
            const width = window.innerWidth;

            if (height < 600 && width < 800) {
                this.setState({
                    blockStyle: {
                        width: "200px",
                        height: "200px",
                        background: "blue"
                    }
                });
            } else {
                this.setState({ blockStyle: initialStyle });
            }
        });
    }

    componentWillUnmount() {
        console.log('will unmount');
    }

    render() {
        const { style } = this.state.blockStyle;
        return <div className="box" style={this.state.blockStyle} />;
    }
}
