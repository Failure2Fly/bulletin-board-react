import React from 'react';

export default function PostSellWantedRadio({setPostSellWantRadio}){

    return (
        <div className="form-group">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Selling" id="Sell" name="Post_Sell_Want" onChange={e => setPostSellWantRadio(e.target.value)}></input>
                <label className="form-check-label" for="flexCheckDefault">
                    Sell
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Wanted" id="Want" name="Post_Sell_Want" onChange={e => setPostSellWantRadio(e.target.value)}></input>
                <label className="form-check-label" for="flexCheckChecked">
                    Want
                </label>
            </div>
        </div>
    )  
}
