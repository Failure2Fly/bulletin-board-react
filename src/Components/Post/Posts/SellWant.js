import React, {useState} from 'react';
import PostItemForSaleWanted from '../PostElements/ItemForSaleWanted';
import PostSellWantedRadio from '../PostElements/SellWantedRadio';
import PostDescription from '../PostElements/Description';
import PostPrice from '../PostElements/Price';
import PostEmail from '../PostElements/Email';
import PostPhoneNumber from '../PostElements/PhoneNumber';
import ColorPicker from '../../../ColorPicker';
import { getDatabase, ref, set, push } from "firebase/database";
import {firebasePosts, firebaseSellWant} from '../../../firebase';

export default function SellWant({setShowPost, postTitle}){

    const [postColor, setPostColor] = useState('#fff') 
    const [postItemForSaleWanted, setPostItemForSaleWanted] = useState('')
    const [postSellWantRadio, setPostSellWantRadio] = useState('') 
    const [postDescription, setPostDescription] = useState('')
    const [postPrice, setPostPrice] = useState('')
    const [postEmail, setPostEmail] = useState('')
    const [postPhoneNumber, setPostPhoneNumber] = useState('')

    const submitSellWant = () => {
        push(firebasePosts, { 
            TimeSubmitted: Date(),
            Type: postTitle,
            Sell_Want: postSellWantRadio,
            ItemForSale_Wanted: postItemForSaleWanted,
            Description: postDescription,
            Price: postPrice,
            PhoneNumber: postPhoneNumber,
            Email: postEmail,
            BackgroundColor: postColor 
        })
        push(firebaseSellWant, { 
            TimeSubmitted: Date(),
            Type: postTitle,
            Sell_Want: postSellWantRadio,
            ItemForSale_Wanted: postItemForSaleWanted,
            Description: postDescription,
            Price: postPrice,
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
                    <PostItemForSaleWanted setPostItemForSaleWanted={setPostItemForSaleWanted}/>
                    <PostSellWantedRadio setPostSellWantRadio={setPostSellWantRadio}/>
                    <PostDescription setPostDescription={setPostDescription}/>
                    <PostPrice setPostPrice={setPostPrice}/>
                    <PostEmail setPostEmail={setPostEmail}/>
                    <PostPhoneNumber setPostPhoneNumber={setPostPhoneNumber}/>
                </div>
                <div className="buttons">
                    <button type="submit" className="btn btn-primary" onClick={() => {submitSellWant()}} >
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
