import React from 'react';
import { GithubPicker } from 'react-color';

export default function ColorPicker({setPostColor}){


    return (
        <GithubPicker onChange={color => setPostColor(color.hex)}/>
    );

}
