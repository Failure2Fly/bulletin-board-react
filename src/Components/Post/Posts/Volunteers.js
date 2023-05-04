import React, {useState} from 'react';
import PostWhere from '../PostElements/Where';
import PostTime from '../PostElements/Time';
import PostDate from '../PostElements/Date';
import PostDescription from '../PostElements/Description';
import ColorPicker from '../../../ColorPicker';
import { getDatabase, ref, set, push } from "firebase/database";
import {firebaseDatabase, firebasePosts, firebaseVolunteers} from '../../../firebase';

export default function Volunteers({setShowPost, postTitle}){

    const [postColor, setPostColor] = useState('#fff') 
    const [postWhere, setPostWhere] = useState('')
    const [postTime, setPostTime] = useState('')
    const [postDate, setPostDate] = useState('') 
    const [postDescription, setPostDescription] = useState('')

    const submitVolunteers = () => {
        push(firebasePosts, { 
            TimeSubmitted: Date(),
            Type: postTitle,
            Where: postWhere,
            Time: postTime,
            Date: postDate,
            Description: postDescription,
            BackgroundColor: postColor
        })
        push(firebaseVolunteers, { 
            TimeSubmitted: Date(),
            Type: postTitle,
            Where: postWhere,
            Time: postTime,
            Date: postDate,
            Description: postDescription,
            BackgroundColor: postColor
        })
    }

    return (
        <div className="post-full" style={{backgroundColor: postColor}}>
            <form>
                <div className="form-group post-title">
                    <h2>{postTitle}</h2>
                </div>
                <div className="post-inputs">
                    <ColorPicker setPostColor={setPostColor}/>
                    <PostWhere setPostWhere={setPostWhere}/>
                    <PostTime setPostTime={setPostTime}/>
                    <PostDate setPostDate={setPostDate}/>
                    <PostDescription setPostDescription={setPostDescription}/>   
                </div>
                <div className="buttons">
                    <button type="submit" className="btn btn-primary" onClick={() => {submitVolunteers()}}>
                        Submit 
                    </button> 

                    <button type="button" className="btn btn-danger" onClick={() => {setShowPost()}}>
                        Close 
                    </button>  
                </div>
            </form>         
        </div>
    )

}
