import React, { Component } from "react";

export class Input extends Component {
    render() {
        const { value, inputChange } = this.props;
        return (
            <div class="search-bar navbar">
                <input
                    type="text"
                    placeholder="Search"
                    value={value}
                    onInput={inputChange}
                />
            </div>
        );
    }
}
