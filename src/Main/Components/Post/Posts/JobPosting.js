import React from 'react';
import PostJobTitle from '../PostElements/JobTitle';
import PostDescription from '../PostElements/Description';
import PostSalary from '../PostElements/Salary';
import PostJobRequirements from '../PostElements/JobRequirements';



class JobPosting extends React.Component {

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
                        <PostJobTitle/>
                        <PostDescription/>
                        <PostSalary/>
                        <PostJobRequirements/>
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

export default JobPosting;