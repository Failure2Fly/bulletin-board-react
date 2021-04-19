import React from 'react';
import PostItemForSaleWanted from '../PostElements/ItemForSaleWanted';
import PostSellWantedRadio from '../PostElements/SellWantedRadio';
import PostPrice from '../PostElements/Price';
import PostEmail from '../PostElements/Email';
import PostPhoneNumber from '../PostElements/PhoneNumber';


class SellWant extends React.Component {

    constructor(props){
        super(props)

    }
    

    render() {
        return (
            <div className="post-full">
                <form>
                    <div className="form-group post-title">
                        <h2>{this.props.PostInfo.Post_Title}</h2>
                    </div>
                    <div className="post-inputs">
                        <PostItemForSaleWanted/>
                        <PostSellWantedRadio/>
                        <PostPrice/>
                        <PostEmail/>
                        <PostPhoneNumber/>
                    </div>
                    <div className="buttons">
                        <button type="submit" class="btn btn-primary">
                            Submit 
                        </button> 

                        <button type="button" class="btn btn-danger" onClick={() => {this.props.hidePost()}}>
                            Close 
                        </button>  
                    </div>
                </form>         
            </div>
        )
    }   
}

export default SellWant;