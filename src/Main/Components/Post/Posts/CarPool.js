import React from 'react';
import PostTime from '../PostElements/Time';
import PostDate from '../PostElements/Date';
import PostEmail from '../PostElements/Email';
import PostPhoneNumber from '../PostElements/PhoneNumber';
import PostSpacesLeft from '../PostElements/SpacesLeft';


class CarPool extends React.Component {


    render() {
        return (
            <div className="post-full">
                <form>
                    <div className="form-group post-title">
                        <h2>{this.props.PostInfo.Post_Title}</h2>
                    </div>
                    <div className="post-inputs">
                        <PostTime PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostDate PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostEmail PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostPhoneNumber PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostSpacesLeft PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
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

export default CarPool;