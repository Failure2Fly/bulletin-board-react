import React from 'react';
import PostTime from '../PostElements/Time';
import PostDate from '../PostElements/Date';
import PostEmail from '../PostElements/Email';
import PostPhoneNumber from '../PostElements/PhoneNumber';
import PostSpacesLeft from '../PostElements/SpacesLeft';


class CarPool extends React.Component {

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
                        <PostTime/>
                        <PostDate/>
                        <PostEmail/>
                        <PostPhoneNumber/>
                        <PostSpacesLeft/>
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

export default CarPool;