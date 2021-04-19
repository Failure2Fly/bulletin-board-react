import React from 'react';
import PostEmail from '../PostElements/Email';
import PostDescription from '../PostElements/Description';
import PostPhoneNumber from '../PostElements/PhoneNumber';
import PostImage from '../PostElements/Image';
import PostReward from '../PostElements/Reward';

class LostPet extends React.Component {

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
                <PostImage/>
                <PostDescription/>
                <PostEmail/>
                <PostPhoneNumber/>
                <PostReward/>
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

export default LostPet;