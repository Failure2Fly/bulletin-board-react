import React from 'react';

class PostSellWantedRadio extends React.Component {

    render() {
        return (
            <div className="form-group">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Sell" value="Selling" name={this.props.Post_Sell_Want} onChange={this.props.handleChange}></input>
                    <label className="form-check-label" for="inlineRadio1">Sell</label>
                </div>
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Want" value="Wanted" name={this.props.Post_Sell_Want} onChange={this.props.handleChange}></input>
                    <label className="form-check-label" for="inlineRadio2">Want</label>
                </div>
            </div>
        )
    }   
}

export default PostSellWantedRadio;