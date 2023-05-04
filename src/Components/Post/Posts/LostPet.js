import React, {useState} from 'react';
import PostEmail from '../PostElements/Email';
import PostDescription from '../PostElements/Description';
import PostPhoneNumber from '../PostElements/PhoneNumber';
import PostImage from '../PostElements/Image';
import PostReward from '../PostElements/Reward';
import ColorPicker from '../../../ColorPicker';
import { push } from "firebase/database";
import {firebasePosts, firebaseLostPet} from '../../../firebase';

export default function LostPet({setShowPost, postTitle}){  

  const [postColor, setPostColor] = useState('#fff') 
  const [postImage, setPostImage] = useState('')
  const [postDescription, setPostDescription] = useState('') 
  const [postEmail, setPostEmail] = useState('') 
  const [postPhoneNumber, setPostPhoneNumber] = useState('') 
  const [postReward, setPostReward] = useState('')
  
  const submitLostPet = () => {
    push(firebasePosts, { 
      TimeSubmitted: Date(),
      Type: postTitle,
      Image: postImage,
      Description: postDescription,
      Email: postEmail,
      PhoneNumber: postPhoneNumber,
      Reward: postReward,
      BackgroundColor: postColor
    })
    push(firebaseLostPet, { 
        TimeSubmitted: Date(),
        Type: postTitle,
        Image: postImage,
        Description: postDescription,
        Email: postEmail,
        PhoneNumber: postPhoneNumber,
        Reward: postReward,
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
          <PostImage setPostImage={setPostImage} />
          <img src={postImage} alt="" className="post-image"></img>
          <PostDescription setPostDescription={setPostDescription} />
          <PostEmail setPostEmail={setPostEmail} />
          <PostPhoneNumber setPostPhoneNumber={setPostPhoneNumber} />
          <PostReward setPostReward={setPostReward} />
        </div>
        <div className="buttons">
          <button type="submnit" className="btn btn-primary" onClick={() => submitLostPet()}>
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
