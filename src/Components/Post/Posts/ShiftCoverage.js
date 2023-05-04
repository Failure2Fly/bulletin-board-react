import React, {useState} from 'react';
import PostShiftTimeNeeded from '../PostElements/ShiftTimeNeeded';
import PostShiftTimeAvailable from '../PostElements/ShiftTimeAvailable';
import PostPhoneNumber from '../PostElements/PhoneNumber';
import ColorPicker from '../../../ColorPicker';
import { getDatabase, ref, set, push } from "firebase/database";
import {firebasePosts, firebaseShiftCoverage} from '../../../firebase';

export default function SellWShiftCoverage({setShowPost, postTitle}){   

    const [postColor, setPostColor] = useState('#fff') 
    const [postShiftTimeNeeded, setPostShiftTimeNeeded] = useState('')
    const [postShiftTimeAvailable, setPostShiftTimeAvailable] = useState('') 
    const [postPhoneNumber, setPostPhoneNumber] = useState('')
    
    const submitShiftCoverage = () => {
        push(firebasePosts, { 
            TimeSubmitted: Date(),
            Type: postTitle, 
            ShiftTimeNeeded: postShiftTimeNeeded,
            ShiftTimeAvailable: {
                TimeAvailable1: postShiftTimeAvailable
            },
            PhoneNumber: postPhoneNumber,
            BackgroundColor: postColor
        })
        push(firebaseShiftCoverage, { 
            TimeSubmitted: Date(),
            Type: postTitle, 
            ShiftTimeNeeded: postShiftTimeNeeded,
            ShiftTimeAvailable: {
                TimeAvailable1: postShiftTimeAvailable
            },
            PhoneNumber: postPhoneNumber,
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
                    <PostShiftTimeNeeded setPostShiftTimeNeeded={setPostShiftTimeNeeded}/>
                    <PostShiftTimeAvailable setPostShiftTimeAvailable={setPostShiftTimeAvailable}/>
                    <PostPhoneNumber setPostPhoneNumber={setPostPhoneNumber}/>
                </div>
                <div className="buttons">
                    <button type="submit" className="btn btn-primary" onClick={() => {submitShiftCoverage()}}>
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
