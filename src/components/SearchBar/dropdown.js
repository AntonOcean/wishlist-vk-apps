import React from "react";
import {StyleSearchDropDown} from "./style/dropdown";


export default class DropDown extends React.Component {
    render() {
        const show = this.props.show;
        const rows = [];
        this.props.tips.forEach((tip) => {
            rows.push(<li>{tip.word}</li>);
        });

        return (
            <StyleSearchDropDown show={show}>
                {rows}
            </StyleSearchDropDown>
        )
    }
}