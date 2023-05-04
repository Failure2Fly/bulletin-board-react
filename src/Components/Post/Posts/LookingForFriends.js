import React, {useState} from 'react';
import PostHobbies from '../PostElements/Hobbies';
import PostPhoneNumber from '../PostElements/PhoneNumber';
import PostEmail from '../PostElements/Email';
import ColorPicker from '../../../ColorPicker';
import { push } from "firebase/database";
import {firebasePosts, firebaseLookingForFriends} from '../../../firebase';

export default function LookingForFriends({setShowPost, postTitle}){

    const [postColor, setPostColor] = useState('#fff') 
    const [postHobbies, setPostHobbies] = useState('')
    const [postPhoneNumber, setPostPhoneNumber] = useState('') 
    const [postEmail, setPostEmail] = useState('')


    const submitLookingForFriends = () => {
        push(firebasePosts, { 
            TimeSubmitted: Date(),
            Type: postTitle,
            Hobbies: postHobbies,
            PhoneNumber: postPhoneNumber,
            Email: postEmail,
            BackgroundColor: postColor
        })
        push(firebaseLookingForFriends, { 
            TimeSubmitted: Date(),
            Type: postTitle,
            Hobbies: postHobbies,
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
                    <PostHobbies setPostHobbies={setPostHobbies}/>
                    <PostPhoneNumber setPostPhoneNumber={setPostPhoneNumber}/>
                    <PostEmail setPostEmail={setPostEmail}/>   
                </div>
                <div className="buttons">
                    <button type="submit" className="btn btn-primary" onClick={() => {submitLookingForFriends()}}>
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
