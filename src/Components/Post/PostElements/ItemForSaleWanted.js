import React from 'react';

export default function PostItemForSaleWanted({setPostItemForSaleWanted}){

    return (
        <div className="form-group">
            <h5>Item</h5>
            <input type="text" className="form-control" id="item-sale-wanted" placeholder="Item" name="Post_ItemForSale_Wanted" onChange={e => setPostItemForSaleWanted(e.target.value)}></input>
        </div>
    )  
}
