import React from 'react';

class PostPrice extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Price</h5>
                <input type="number" className="form-control" id="price" placeholder="Price"></input>
            </div>
        )
    }   
}

export default PostPrice;