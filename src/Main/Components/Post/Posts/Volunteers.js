import React from 'react';
import PostWhere from '../PostElements/Where';
import PostTime from '../PostElements/Time';
import PostDate from '../PostElements/Date';
import PostDescription from '../PostElements/Description';
import ColorPicker from '../../../ColorPicker';

class Volunteers extends React.Component {


    render() {
        return (
            <div className="post-full" style={{backgroundColor:this.props.PostInfo.Post_Background_Color}}>
                <form>
                    <div className="form-group post-title">
                        <h2>{this.props.PostInfo.Post_Title}</h2>
                    </div>
                    <div className="post-inputs">
                        <ColorPicker PostElement={this.props.PostInfo} onChangeComplete={this.props.onChangeComplete}/>
                        <PostWhere PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostTime PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostDate PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostDescription PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>   
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

export default Volunteers;