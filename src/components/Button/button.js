import React from "react";
import {StyleButton} from "./style";


export default class Button extends React.Component {
    render() {
        return (
            <StyleButton>{this.props.title}</StyleButton>
        );
    }
}