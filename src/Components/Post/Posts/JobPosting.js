import React, {useState} from 'react';
import PostJobTitle from '../PostElements/JobTitle';
import PostDescription from '../PostElements/Description';
import PostSalary from '../PostElements/Salary';
import PostJobRequirements from '../PostElements/JobRequirements';
import ColorPicker from '../../../ColorPicker';
import { getDatabase, ref, set, push } from "firebase/database";
import {firebasePosts, firebaseJobPosting} from '../../../firebase';

export default function JobPosting({setShowPost, postTitle}){

    const [postColor, setPostColor] = useState('#fff') 
    const [postJobTitle, setPostJobTitle] = useState('')
    const [postDescription, setPostDescription] = useState('')
    const [postJobSalary, setPostJobSalary] = useState('') 
    const [postJobRequirements, setPostJobRequirements] = useState('') 

    const submitJobPosting = () => {
        push(firebasePosts, { 
            TimeSubmitted: Date(),
            Type: postTitle, 
            JobTitle: postJobTitle,
            JobDescription: postDescription,
            SalaryRange: postJobSalary,
            JobRequirements: postJobRequirements,
            BackgroundColor: postColor
        })
        push(firebaseJobPosting, { 
            TimeSubmitted: Date(),
            Type: postTitle, 
            JobTitle: postJobTitle,
            JobDescription: postDescription,
            SalaryRange: postJobSalary,
            JobRequirements: postJobRequirements,
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
                    <PostJobTitle setPostJobTitle={setPostJobTitle}/>
                    <PostDescription setPostDescription={setPostDescription}/>
                    <PostSalary setPostJobSalary={setPostJobSalary}/>
                    <PostJobRequirements setPostJobRequirements={setPostJobRequirements}/>
                </div>
                <div className="buttons">
                    <button type="submit" className="btn btn-primary" onClick={() => {submitJobPosting()}}>
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
