import React, {useState} from 'react';
import PostWhere from '../PostElements/Where';
import PostTime from '../PostElements/Time';
import PostDate from '../PostElements/Date';
import PostDescription from '../PostElements/Description';
import ColorPicker from '../../../ColorPicker';
import { push } from "firebase/database";
import {firebasePosts, firebaseParty} from '../../../firebase';

export default function Party({setShowPost, postTitle}){

    const [postColor, setPostColor] = useState('#fff') 
    const [postWhere, setPostWhere] = useState('')
    const [postTime, setPostTime] = useState('') 
    const [postDate, setPostDate] = useState('')
    const [postDescription, setPostDescription] = useState('')

    const submitParty = () => {
        push(firebasePosts,{ 
            TimeSubmitted: Date(),
            Type: postTitle,
            Where: postWhere,
            Time: postTime,
            Date: postDate,
            Description: postDescription,
            BackgroundColor: postColor
        })
        push(firebaseParty,{ 
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
                    <button type="submit" className="btn btn-primary" onClick={() => {submitParty()}}>
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
