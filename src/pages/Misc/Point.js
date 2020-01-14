import React, { Component } from "react";
import { View } from "react-native";

export default class Point extends React.Component {
    constructor(x, y, size, colour, id) {
        super();
        this.x = x;
        this.y = y;
        this.id = id;
        this.size = size;
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
                    width: this.size,
                    height: this.size,
                    backgroundColor: this.colour
                }} />
    );
  }
}