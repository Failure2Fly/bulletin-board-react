import React from 'react';

class PostEmail extends React.Component {


    render() {
        return (
            <div className="form-group">
                <h5>Email</h5>
                <input type="email" className="form-control" id="emailAddress" placeholder="Email" name="Post_Email" value={this.props.PostElement.Post_Email} onChange={this.props.handleChange}></input>
            </div>
        )
    }   
}

export default PostEmail;