import React from 'react';
import PostJobTitle from '../PostElements/JobTitle';
import PostDescription from '../PostElements/Description';
import PostSalary from '../PostElements/Salary';
import PostJobRequirements from '../PostElements/JobRequirements';
import ColorPicker from '../../../ColorPicker';


class JobPosting extends React.Component {


    render() {
        return (
            <div className="post-full" style={{backgroundColor:this.props.PostInfo.Post_Background_Color}}>
                <form>
                    <div className="form-group post-title">
                        <h2>{this.props.PostInfo.Post_Title}</h2>
                    </div>
                    <div className="post-inputs">
                        <ColorPicker PostElement={this.props.PostInfo} onChangeComplete={this.props.onChangeComplete}/>
                        <PostJobTitle PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostDescription PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostSalary PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostJobRequirements PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
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

export default JobPosting;