import React, {useState} from 'react';
import PostTime from '../PostElements/Time';
import PostDate from '../PostElements/Date';
import PostEmail from '../PostElements/Email';
import PostPhoneNumber from '../PostElements/PhoneNumber';
import PostSpacesLeft from '../PostElements/SpacesLeft';
import ColorPicker from '../../../ColorPicker';
import {firebasePosts, firebaseCarPool} from '../../../firebase';

export default function CarPool({setShowPost, postTitle}){

    const [postColor, setPostColor] = useState('#fff') 
    const [postTime, setPostTime] = useState('')
    const [postDate, setPostDate] = useState('')
    const [postEmail, setPostEmail] = useState('') 
    const [postPhoneNumber, setPostPhoneNumber] = useState('') 
    const [postSpacesLeft, setPostSpacesLeft] = useState('')

    const submitCarPool = () => {
        firebasePosts.push().set({
            TimeSubmitted: Date(),
            Type: postTitle, 
            Time: postTime,
            Date: postDate,
            PhoneNumber: postPhoneNumber,
            Email: postEmail,
            SpacesLeft: postSpacesLeft,
            BackgroundColor: postColor
        })
        firebaseCarPool.push().set({
            TimeSubmitted: Date(),
            Type: postTitle, 
            Time: postTime,
            Date: postDate,
            PhoneNumber: postPhoneNumber,
            Email: postEmail,
            SpacesLeft: postSpacesLeft,
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
                    <PostTime setPostTime={setPostTime}/>
                    <PostDate setPostDate={setPostDate}/>
                    <PostEmail setPostEmail={setPostEmail}/>
                    <PostPhoneNumber setPostPhoneNumber={setPostPhoneNumber}/>
                    <PostSpacesLeft setPostSpacesLeft={setPostSpacesLeft}/>
                </div>
                <div className="buttons">
                    <button type="submit" className="btn btn-primary" onClick={() => {submitCarPool()}}>
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
