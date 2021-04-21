import React from 'react';

class PostImage extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Image</h5>
                <input type="file" className="form-control-file" id="Image" name="Post_Image" value={this.props.PostElement.Post_Image} onChange={this.props.handleChange}></input>
            </div>
        )
    }   
}

export default PostImage;