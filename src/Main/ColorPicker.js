import React from 'react';
import { GithubPicker } from 'react-color';

class ColorPicker extends React.Component {

    render() {
        return (
            <GithubPicker onChangeComplete={this.props.onChangeComplete}/>
        );
    }
}



export default ColorPicker;