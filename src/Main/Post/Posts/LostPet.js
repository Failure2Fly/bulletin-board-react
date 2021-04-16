import React from 'react';
import PostEmail from '../PostElements/Email';
import PostDescription from '../PostElements/Description';
import PostPhoneNumber from '../PostElements/PhoneNumber';
import PostImage from '../PostElements/Image';

class LostPet extends React.Component {

    constructor(props){
        super(props)

        this.props.ShowPost.Post_Title = 'LOST PET';

    }
    
    hidePost = () => {
        this.props.ShowPost.show = false;
        this.setState({
            
        });
    };

    render() {
        return (
            <div className="post-full">
                <form>
                    <div className="form-group post-title">
                        <h2>{this.props.ShowPost.Post_Title}</h2>
                    </div>
                    <PostImage/>
                    <PostDescription/>
                    <PostEmail/>
                    <PostPhoneNumber/>
                </form>
                <div className="buttons">
                    <button>
                        Submit 
                    </button> 

                    <button
                    onClick={() => {
                        this.hidePost()}}
                    >
                        Close 
                    </button>  
                </div>
            </div>
        )
    }   
}

export default LostPet;