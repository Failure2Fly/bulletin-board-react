import React from 'react';
import * as filestack from 'filestack-js';

const client = filestack.init('AHNLMQPjSLusKOLv01SOhz');

export default function PostImage({setPostImage}) {

    const uploadImage = () => {
        const options = {
            accept: ["image/*"],
            onFileUploadFinished: file => {
                setPostImage(file.url)        
            }
        };
        client.picker(options).open();
    }

        return (
            <div className="form-group post-image-group">
                <h5>Image</h5>
                <button type="button" className="btn btn-light filepicker" id="Image" name="postImage" onClick={() => uploadImage()}>Upload Image</button>
            </div>
        )

}
