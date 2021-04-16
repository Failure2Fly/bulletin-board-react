import React from 'react';
import './css/Bulletin.css';
import './Post/Post.css';
// import LostPet from '../Main/Post/Posts/LostPet'
import PostEmail from './Post/PostElements/Email';
import PostDescription from './Post/PostElements/Description';
import PostPhoneNumber from './Post/PostElements/PhoneNumber';
import PostImage from './Post/PostElements/Image';
import PostReward from './Post/PostElements/Reward';
import PostTimeAvailable from './Post/PostElements/TimeAvailable';
import PostPrice from './Post/PostElements/Price';
import PostLessonType from './Post/PostElements/LessonType';
import PostTime from './Post/PostElements/Time';
import PostDate from './Post/PostElements/Date';
import PostSpacesLeft from './Post/PostElements/SpacesLeft';
import PostJobTitle from './Post/PostElements/JobTitle';
import PostSalary from './Post/PostElements/Salary';
import PostJobRequirements from './Post/PostElements/JobRequirements';
import PostShiftTimeNeeded from './Post/PostElements/ShiftTimeNeeded';
import PostShiftTimeAvailable from './Post/PostElements/ShiftTimeAvailable';
import PostItemForSaleWanted from './Post/PostElements/ItemForSaleWanted';
import PostSellWantedRadio from './Post/PostElements/SellWantedRadio';
import PostWhere from './Post/PostElements/Where';
import PostHobbies from './Post/PostElements/Hobbies';
import PostActivity from './Post/PostElements/Activity';
class Bulletin extends React.Component{
  
  constructor(props){
    super(props)

  }

  hidePost = () => {
    this.props.ShowPost.show = false;
    this.setState({
        
    });
  };

  render() {
      if (this.props.ShowPost.show && this.props.ShowPost.Post_Title == 'LOST PET'){
        return (
          <div className="post-full">
            <form>
                <div className="form-group post-title">
                    <h2>{this.props.ShowPost.Post_Title}</h2>
                </div>
                <div className="post-inputs">
                  <PostImage/>
                  <PostDescription/>
                  <PostEmail/>
                  <PostPhoneNumber/>
                  <PostReward/>
                </div>
                <div className="buttons">
                <button type="submit">
                    Submit 
                </button> 

                <button type="button" onClick={() => {this.hidePost()}}>
                    Close 
                </button>  
              </div>
            </form>           
          </div>
        );
      }
      else if (this.props.ShowPost.show && this.props.ShowPost.Post_Title == 'LESSONS'){ 
        return (
          <div className="post-full">
            <form>
                <div className="form-group post-title">
                    <h2>{this.props.ShowPost.Post_Title}</h2>
                </div>
                <div className="post-inputs">
                  <PostTimeAvailable/>
                  <PostPrice/>
                  <PostEmail/>
                  <PostPhoneNumber/>
                  <PostLessonType/>
                </div>
                <div className="buttons">
                <button type="submit">
                    Submit 
                </button> 

                <button onClick={() => {this.hidePost()}}>
                    Close 
                </button>  
              </div>
            </form>         
          </div>
        );
      }
      else if (this.props.ShowPost.show && this.props.ShowPost.Post_Title == 'CAR POOL'){ 
        return (
          <div className="post-full">
            <form>
                <div className="form-group post-title">
                    <h2>{this.props.ShowPost.Post_Title}</h2>
                </div>
                <div className="post-inputs">
                  <PostTime/>
                  <PostDate/>
                  <PostEmail/>
                  <PostPhoneNumber/>
                  <PostSpacesLeft/>
                </div>
                <div className="buttons">
                <button type="submit">
                    Submit 
                </button> 

                <button onClick={() => {this.hidePost()}}>
                    Close 
                </button>  
              </div>
            </form>
          </div>
        );
      }
      else if (this.props.ShowPost.show && this.props.ShowPost.Post_Title == 'JOB POSTING'){ 
        return (
          <div className="post-full">
            <form>
                <div className="form-group post-title">
                    <h2>{this.props.ShowPost.Post_Title}</h2>
                </div>
                <div className="post-inputs">
                  <PostJobTitle/>
                  <PostDescription/>
                  <PostSalary/>
                  <PostJobRequirements/>
                </div>
                <div className="buttons">
                <button type="submit">
                    Submit 
                </button> 
              
                <button onClick={() => {this.hidePost()}}>
                    Close 
                </button>   
              </div>
            </form>
          </div>
        );
      }
      else if (this.props.ShowPost.show && this.props.ShowPost.Post_Title == 'SHIFT COVERAGE'){ 
        return (
          <div className="post-full">
            <form>
                <div className="form-group post-title">
                    <h2>{this.props.ShowPost.Post_Title}</h2>
                </div>
                <div className="post-inputs">
                  <PostShiftTimeNeeded/>
                  <PostShiftTimeAvailable/>
                  <PostPhoneNumber/>
                </div>
                <div className="buttons">
                <button type="submit">
                    Submit 
                </button> 

                <button onClick={() => {this.hidePost()}}>
                    Close 
                </button>  
                </div>
            </form>
          </div>
        );
      }
      else if (this.props.ShowPost.show && this.props.ShowPost.Post_Title == 'SELLING/WANTED'){ 
        return (
          <div className="post-full">
            <form>
                <div className="form-group post-title">
                    <h2>{this.props.ShowPost.Post_Title}</h2>
                </div>
                <div className="post-inputs">
                  <PostItemForSaleWanted/>
                  <PostSellWantedRadio/>
                  <PostPrice/>
                  <PostEmail/>
                  <PostPhoneNumber/>
                </div>
                <div className="buttons">
                <button type="submit">
                    Submit 
                </button> 

                <button onClick={() => {this.hidePost()}}>
                    Close 
                </button>  
                </div>
            </form>
          </div>
        );
      }
      else if (this.props.ShowPost.show && this.props.ShowPost.Post_Title == 'VOLUNTEERS'){ 
        return (
          <div className="post-full">
            <form>
                <div className="form-group post-title">
                    <h2>{this.props.ShowPost.Post_Title}</h2>
                </div>
                <div className="post-inputs">
                  <PostWhere/>
                  <PostTime/>
                  <PostDate/>
                  <PostDescription/>                  
                </div>
                <div className="buttons">
                <button type="submit">
                    Submit 
                </button> 

                <button onClick={() => {this.hidePost()}}>
                    Close 
                </button>  
                </div>
            </form>
          </div>
        );
      }
      else if (this.props.ShowPost.show && this.props.ShowPost.Post_Title == 'PARTY'){ 
        return (
          <div className="post-full">
            <form>
                <div className="form-group post-title">
                    <h2>{this.props.ShowPost.Post_Title}</h2>
                </div>
                <div className="post-inputs">
                  <PostWhere/>
                  <PostTime/>
                  <PostDate/>
                  <PostDescription/>
                </div>
                <div className="buttons">
                <button type="submit">
                    Submit 
                </button> 

                <button onClick={() => {this.hidePost()}}>
                    Close 
                </button>  
                </div>
            </form>
          </div>
        );
      }
      else if (this.props.ShowPost.show && this.props.ShowPost.Post_Title == 'LOOKING FOR FRIENDS'){ 
        return (
          <div className="post-full">
            <form>
                <div className="form-group post-title">
                    <h2>{this.props.ShowPost.Post_Title}</h2>
                </div>
                <div className="post-inputs">
                  <PostHobbies/>
                  <PostPhoneNumber/>
                  <PostEmail/>                  
                </div>
                <div className="buttons">
                <button type="submit">
                    Submit 
                </button> 

                <button onClick={() => {this.hidePost()}}>
                    Close 
                </button>  
                </div>
            </form>
          </div>
        );
      }
      else if (this.props.ShowPost.show && this.props.ShowPost.Post_Title == 'PLAY GAMES'){ 
        return (
          <div className="post-full">
            <form>
                <div className="form-group post-title">
                    <h2>{this.props.ShowPost.Post_Title}</h2>
                </div>
                <div className="post-inputs">
                  <PostActivity/>
                  <PostTime/>
                  <PostDate/>
                  <PostDescription/>
                  <PostPhoneNumber/>
                  <PostEmail/>
                </div>
                <div className="buttons">
                <button type="submit">
                    Submit 
                </button> 

                <button onClick={() => {this.hidePost()}}>
                    Close 
                </button>  
                </div>
            </form>
          </div>
        );
      }
      else {
        return null
      }
  }
}

export default Bulletin;