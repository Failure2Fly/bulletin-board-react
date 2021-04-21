import React from 'react';

class PostSellWantedRadio extends React.Component {

    render() {
        return (
            <div className="form-group">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="Sell" value={this.props.PostElement.Post_Sell_Want} name="Post_Sell_Want" onChange={this.props.handleChange}></input>
                    <label className="form-check-label" for="inlineCheckbox1">Selling</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="Want" value={this.props.PostElement.Post_Sell_Want} name="Post_Sell_Want" onChange={this.props.handleChange}></input>
                    <label className="form-check-label" for="inlineCheckbox2">Wanting</label>
                </div>
            </div>
        )
    }   
}

export default PostSellWantedRadio;