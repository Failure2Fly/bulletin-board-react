import React, {useState} from 'react';
import PostActivity from '../PostElements/Activity';
import PostTime from '../PostElements/Time';
import PostDate from '../PostElements/Date';
import PostDescription from '../PostElements/Description';
import PostPhoneNumber from '../PostElements/PhoneNumber';
import PostEmail from '../PostElements/Email';
import ColorPicker from '../../../ColorPicker';
import { getDatabase, ref, set, push } from "firebase/database";
import {firebasePosts, firebasePlayGames} from '../../../firebase';

export default function PlayGames({setShowPost, postTitle}){

    const [postColor, setPostColor] = useState('#fff') 
    const [postActivity, setPostActivity] = useState('')
    const [postTime, setPostTime] = useState('') 
    const [postDate, setPostDate] = useState('')
    const [postDescription, setPostDescription] = useState('') 
    const [postPhoneNumber, setPostPhoneNumber] = useState('')
    const [postEmail, setPostEmail] = useState('') 

    const submitPlayGames = () => {
        push(firebasePosts, { 
            TimeSubmitted: Date(),
            Type: postTitle,
            Game: postActivity,
            Time: postTime,
            Date: postDate,
            Description: postDescription,
            PhoneNumber: postPhoneNumber,
            Email: postEmail,
            BackgroundColor: postColor
        })
        push(firebasePlayGames, { 
            TimeSubmitted: Date(),
            Type: postTitle,
            Game: postActivity,
            Time: postTime,
            Date: postDate,
            Description: postDescription,
            PhoneNumber: postPhoneNumber,
            Email: postEmail,
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
                    <PostActivity setPostActivity={setPostActivity}/>
                    <PostTime setPostTime={setPostTime}/>
                    <PostDate setPostDate={setPostDate}/>
                    <PostDescription setPostDescription={setPostDescription}/>
                    <PostPhoneNumber setPostPhoneNumber={setPostPhoneNumber}/>
                    <PostEmail setPostEmail={setPostEmail}/>   
                </div>
                <div className="buttons">
                    <button type="submit" className="btn btn-primary" onClick={() => {submitPlayGames()}}>
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
