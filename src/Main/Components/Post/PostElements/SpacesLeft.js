import React from 'react';

class PostSpacesLeft extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Spaces Left</h5>
                    <input type="number" className="form-control" id="spaces-left" placeholder="Spaces Left"></input>
            </div>
        )
    }   
}

export default PostSpacesLeft;