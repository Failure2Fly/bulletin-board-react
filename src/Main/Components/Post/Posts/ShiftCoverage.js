import React from 'react';
import PostShiftTimeNeeded from '../PostElements/ShiftTimeNeeded';
import PostShiftTimeAvailable from '../PostElements/ShiftTimeAvailable';
import PostPhoneNumber from '../PostElements/PhoneNumber';


class ShiftCoverage extends React.Component {   

    render() {
        return (
            <div className="post-full">
                <form>
                    <div className="form-group post-title">
                        <h2>{this.props.PostInfo.Post_Title}</h2>
                    </div>
                    <div className="post-inputs">
                        <PostShiftTimeNeeded PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostShiftTimeAvailable PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostPhoneNumber PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
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

export default ShiftCoverage;