import React from 'react';
import PostTimeAvailable from '../PostElements/TimeAvailable';
import PostPrice from '../PostElements/Price';
import PostEmail from '../PostElements/Email';
import PostPhoneNumber from '../PostElements/PhoneNumber';
import PostLessonType from '../PostElements/LessonType';

class Lessons extends React.Component {

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
                        <PostTimeAvailable/>
                        <PostPrice/>
                        <PostEmail/>
                        <PostPhoneNumber/>
                        <PostLessonType/>
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

export default Lessons;