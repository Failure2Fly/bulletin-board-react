import React from 'react';
import PostItemForSaleWanted from '../PostElements/ItemForSaleWanted';
import PostSellWantedRadio from '../PostElements/SellWantedRadio';
import PostDescription from '../PostElements/Description';
import PostPrice from '../PostElements/Price';
import PostEmail from '../PostElements/Email';
import PostPhoneNumber from '../PostElements/PhoneNumber';
import ColorPicker from '../../../ColorPicker';

class SellWant extends React.Component {

    render() {
        return (
            <div className="post-full" style={{backgroundColor:this.props.PostInfo.Post_Background_Color}}>
                <form>
                    <div className="form-group post-title">
                        <h2>{this.props.PostInfo.Post_Title}</h2>
                    </div>
                    <div className="post-inputs">
                        <ColorPicker PostElement={this.props.PostInfo} onChangeComplete={this.props.onChangeComplete}/>
                        <PostItemForSaleWanted PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostSellWantedRadio PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostDescription PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostPrice PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostEmail PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                        <PostPhoneNumber PostElement={this.props.PostInfo} handleChange={this.props.handleChange}/>
                    </div>
                    <div className="buttons">
                        <button type="submit" className="btn btn-primary" onClick={() => {this.props.submitPost()}}>
                            Submit 
                        </button> 

                        <button type="button" className="btn btn-danger" onClick={() => {this.props.hidePost()}}>
                            Close 
                        </button>  
                    </div>
                </form>         
            </div>
        )
    }   
}

export default SellWant;