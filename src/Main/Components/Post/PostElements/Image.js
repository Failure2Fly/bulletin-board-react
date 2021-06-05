import React from 'react';

class PostImage extends React.Component {

    render() {
        return (
            <div className="form-group post-image-group">
                <h5>Image</h5>
                <button type="button" className="btn btn-light filepicker" id="Image" name="Post_Image" value={this.props.PostElement.Post_Image} onChange={this.props.handleChange} onClick={() => this.props.uploadImage()}>Upload Image</button>
                <img src={this.props.PostElement.Post_Image}></img>
            </div>
        )
    }
}

export default PostImage;