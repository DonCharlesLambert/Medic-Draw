import React, { Component } from "react";
import { View } from "react-native";

export default class Point extends React.Component {
    constructor(x, y, colour, id) {
        super();
        this.x = x;
        this.y = y;
        this.id = id;
        this.colour = colour;
    }

    render() {
        return (
            <View
                key={this.id}
                style={{
                    position: "absolute",
                    top: this.y,
                    left: this.x,
                    width: 5,
                    height: 5,
                    backgroundColor: this.colour
                }} />
    );
  }
}