import React from 'react';

class PostPrice extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Price</h5>
                <input type="number" className="form-control" id="price" placeholder="Price" name="Post_Price" value={this.props.PostElement.Post_Price} onChange={this.props.handleChange}></input>
            </div>
        )
    }   
}

export default PostPrice;