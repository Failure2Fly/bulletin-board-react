import React from 'react';

class PostImage extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Image</h5>
                <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
            </div>
        )
    }   
}

export default PostImage;