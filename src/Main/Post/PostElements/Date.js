import React from 'react';

class PostDate extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Date</h5>
                    <input type="date" className="form-control" id="date" placeholder="Date"></input>
            </div>
        )
    }   
}

export default PostDate;