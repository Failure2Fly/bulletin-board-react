import React from 'react';
import PostTimeAvailable from '../PostElements/TimeAvailable';
import PostPrice from '../PostElements/Price';
import PostEmail from '../PostElements/Email';
import PostPhoneNumber from '../PostElements/PhoneNumber';
import PostLessonType from '../PostElements/LessonType';
import ColorPicker from '../../../ColorPicker';

class Lessons extends React.Component {

    render() {
        return (
            <div className="post-full" style={{backgroundColor:this.props.PostInfo.Post_Background_Color}}>
                <form>
                    <div className="form-group post-title">
                        <h2>{this.props.PostInfo.Post_Title}</h2>
                    </div>
                    <div className="post-inputs">
                        <ColorPicker PostElement={this.props.PostInfo} onChangeComplete={this.props.onChangeComplete}/>
                        <PostTimeAvailable PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostPrice PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostEmail PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostPhoneNumber PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostLessonType PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                    </div>
                    <div className="buttons">
                        <button type="submit" className="btn btn-primary" onClick={() => {this.props.submitPost()}}>
                            Submit 
                        </button> 

                        <button type="button" className="btn btn-danger" onClick={() => {this.props.hidePost()}}>
                            Close 
                        </button>  
                    </div>
                </form>         
            </div>
        )
    }   
}

export default Lessons;