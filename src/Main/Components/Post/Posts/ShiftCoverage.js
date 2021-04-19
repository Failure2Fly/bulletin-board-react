import React from 'react';
import PostShiftTimeNeeded from '../PostElements/ShiftTimeNeeded';
import PostShiftTimeAvailable from '../PostElements/ShiftTimeAvailable';
import PostPhoneNumber from '../PostElements/PhoneNumber';


class ShiftCoverage extends React.Component {

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
                        <PostShiftTimeNeeded/>
                        <PostShiftTimeAvailable/>
                        <PostPhoneNumber/>
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

export default ShiftCoverage;