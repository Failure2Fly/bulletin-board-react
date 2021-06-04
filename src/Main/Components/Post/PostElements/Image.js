import React from 'react';
import * as filestack from 'filestack-js';
const client = filestack.init('AHNLMQPjSLusKOLv01SOhz');

class PostImage extends React.Component {

    uploadImage() {
        const options = {
            uploadConfig: {
                retry: 5,
                timeout: 60000
            }
        };
        client.picker(options).open();
	}

    render() {
        return (
            <div className="form-group">
                <h5>Image</h5>
                {/* <input type="file" className="form-control-file" id="Image" name="Post_Image" value={this.props.PostElement.Post_Image} onChange={this.props.handleChange}></input> */}
                <button type="button" className="btn btn-light filepicker" id="Image" name="Post_Image" value={this.props.PostElement.Post_Image} onChange={this.props.handleChange} onClick={() => this.uploadImage()}>Upload Image</button>
                {this.props.PostElement.Post_Image}
            </div>
        )
    }
}

export default PostImage;