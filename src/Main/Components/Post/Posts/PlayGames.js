import React from 'react';
import PostActivity from '../PostElements/Activity';
import PostTime from '../PostElements/Time';
import PostDate from '../PostElements/Date';
import PostDescription from '../PostElements/Description';
import PostPhoneNumber from '../PostElements/PhoneNumber';
import PostEmail from '../PostElements/Email';


class PlayGames extends React.Component {

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
                        <PostActivity/>
                        <PostTime/>
                        <PostDate/>
                        <PostDescription/>
                        <PostPhoneNumber/>
                        <PostEmail/>   
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

export default PlayGames;