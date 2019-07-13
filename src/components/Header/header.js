import React from "react";
import {StyleRoundImage} from "../../style/roundimage";
import {StyleLocation} from "../../style/location";
import {StyleHeader} from "./style/header";
import {StyleLeftHeader} from "./style/headerleft";
import {StyleRightHeader} from "./style/headerright";


export default class Header extends React.Component {
    render() {

        return (
            <StyleHeader>
                <StyleLeftHeader>
                    <StyleRoundImage src={this.props.data.image} />
                    <StyleLocation>{this.props.data.name}</StyleLocation>
                </StyleLeftHeader>
                <StyleRightHeader>
                    <StyleLocation>{this.props.data.name}</StyleLocation>
                    <StyleRoundImage src={this.props.data.image} />
                    <StyleRoundImage src={this.props.data.image} />
                    <StyleRoundImage src={this.props.data.image} />
                </StyleRightHeader>
            </StyleHeader>
        );
    }
}