import React from 'react';

class PostPhoneNumber extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Phone Number</h5>
              <input type="tel" className="form-control" id="phoneNumber" placeholder="Phone Number" name="Post_PhoneNumber" value={this.props.PostElement.Post_PhoneNumber} onChange={this.props.handleChange}></input>
            </div>
        )
    }   
}

export default PostPhoneNumber;