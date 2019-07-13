import React from "react";
import {StyleSearchSection} from "./style/searchsection";
import {StyleSearchBar} from "./style/searchbar";
import DropDown from "./dropdown";
import {FOUND} from "../../DataMock";


export default class SearchBar extends React.Component {
    state = {
        focus: false
    };

    render() {
        return (
            <StyleSearchSection>
                <StyleSearchBar type='text'
                                 onFocus={() => this.setState({"focus": true})}
                                 onBlur={() => this.setState({"focus": false})}
                                 onKeyUp={(e) => e.keyCode === 13 ? this.setState({"focus": false}) : null}
                                 placeholder={this.props.placeholder}
                />
                <DropDown tips={FOUND} show={this.state.focus}/>
            </StyleSearchSection>
        );
    }

}