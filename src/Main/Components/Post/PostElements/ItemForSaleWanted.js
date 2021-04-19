import React from 'react';

class PostItemForSaleWanted extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Item</h5>
                <input type="text" className="form-control" id="item-sale-wanted" placeholder="Item"></input>
            </div>
        )
    }   
}

export default PostItemForSaleWanted;