import React from 'react';

class PostPhoneNumber extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Phone Number</h5>
              <input type="tel" className="form-control" id="phoneNumber" placeholder="Phone Number"></input>
            </div>
        )
    }   
}

export default PostPhoneNumber;