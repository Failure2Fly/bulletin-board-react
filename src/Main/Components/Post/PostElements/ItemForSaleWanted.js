import React from 'react';

class PostItemForSaleWanted extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Item</h5>
                <input type="text" className="form-control" id="item-sale-wanted" placeholder="Item" name="Post_ItemForSale_Wanted" value={this.props.PostElement.Post_ItemForSale_Wanted} onChange={this.props.handleChange}></input>
            </div>
        )
    }   
}

export default PostItemForSaleWanted;