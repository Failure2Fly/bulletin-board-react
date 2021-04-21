import React from 'react';

class PostDate extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Date</h5>
                    <input type="date" className="form-control" id="date" placeholder="Date" name="Post_Date" value={this.props.PostElement.Post_Date} onChange={this.props.handleChange}></input>
            </div>
        )
    }   
}

export default PostDate;