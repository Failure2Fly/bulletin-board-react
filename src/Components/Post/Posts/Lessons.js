import React, {useState} from 'react';
import PostTimeAvailable from '../PostElements/TimeAvailable';
import PostPrice from '../PostElements/Price';
import PostEmail from '../PostElements/Email';
import PostPhoneNumber from '../PostElements/PhoneNumber';
import PostLessonType from '../PostElements/LessonType';
import ColorPicker from '../../../ColorPicker';
import { push } from "firebase/database";
import {firebasePosts, firebaseLessons} from '../../../firebase';

export default function Lessons({setShowPost, postTitle}) {

    const [postColor, setPostColor] = useState('#fff') 
    const [postTimeAvailableFrom, setPostTimeAvailableFrom] = useState('')
    const [postTimeAvailableTo, setPostTimeAvailableTo] = useState('')
    const [postPrice, setPostPrice] = useState('') 
    const [postEmail, setPostEmail] = useState('') 
    const [postPhoneNumber, setPostPhoneNumber] = useState('') 
    const [postLessonType, setPostLessonType] = useState('')
  
    const submitLessons = () => {
        push(firebasePosts, { 
            TimeSubmitted: Date(),
            Type: postTitle, 
            TimeAvailableFrom: postTimeAvailableFrom,
            TimeAvailableTo: postTimeAvailableTo,
            Price: postPrice,
            PhoneNumber: postPhoneNumber,
            Email: postEmail,
            LessonType: postLessonType,
            BackgroundColor: postColor
        })
        push(firebaseLessons, { 
            TimeSubmitted: Date(),
            Type: postTitle, 
            TimeAvailableFrom: postTimeAvailableFrom,
            TimeAvailableTo: postTimeAvailableTo,
            Price: postPrice,
            PhoneNumber: postPhoneNumber,
            Email: postEmail,
            LessonType: postLessonType,
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
                    <ColorPicker setPostColor={setPostColor} />
                    <PostTimeAvailable setPostTimeAvailableFrom={setPostTimeAvailableFrom} setPostTimeAvailableTo={setPostTimeAvailableTo} />
                    <PostPrice setPostPrice={setPostPrice} />
                    <PostEmail setPostEmail={setPostEmail} />
                    <PostPhoneNumber setPostPhoneNumber={setPostPhoneNumber} />
                    <PostLessonType setPostLessonType={setPostLessonType} />
                </div>
                <div className="buttons">
                    <button type="submit" className="btn btn-primary" onClick={() => submitLessons()}>
                        Submit 
                    </button> 

                    <button type="button" className="btn btn-danger" onClick={() => setShowPost()}>
                        Close 
                    </button>  
                </div>
            </form>         
        </div>
    )
}
