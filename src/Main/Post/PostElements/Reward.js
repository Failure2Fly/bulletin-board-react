import React from 'react';

class PostReward extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Reward</h5>
                <input type="text" className="form-control" id="reward" placeholder="Reward"></input>
            </div>
        )
    }   
}

export default PostReward;