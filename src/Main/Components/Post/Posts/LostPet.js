import React from 'react';
import PostEmail from '../PostElements/Email';
import PostDescription from '../PostElements/Description';
import PostPhoneNumber from '../PostElements/PhoneNumber';
import PostImage from '../PostElements/Image';
import PostReward from '../PostElements/Reward';
import ColorPicker from '../../../ColorPicker';

class LostPet extends React.Component {  

    render() {
        return (
            <div className="post-full" style={{backgroundColor:this.props.PostInfo.Post_Background_Color}}>
            <form>
              <div className="form-group post-title">
                  <h2>{this.props.PostInfo.Post_Title}</h2>
                  <h2>{this.props.PostInfo.Post_Background_Color}</h2>
              </div>
              <div className="post-inputs">
                <ColorPicker PostElement={this.props.PostInfo} handleChange={this.props.handleChange} onChangeComplete={this.props.onChangeComplete}/>
                <PostImage PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                <PostDescription PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                <PostEmail PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                <PostPhoneNumber PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                <PostReward PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
              </div>
              <div className="buttons">
                <button type="submnit" className="btn btn-primary" onClick={() => {this.props.submitPost()}}>
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

export default LostPet;