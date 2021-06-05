import React from 'react';
import './css/Bulletin.css';
import './Post/Post.css';
import LostPet from './Post/Posts/LostPet';
import Lessons from './Post/Posts/Lessons';
import CarPool from './Post/Posts/CarPool';
import JobPosting from './Post/Posts/JobPosting';
import ShiftCoverage from './Post/Posts/ShiftCoverage';
import SellWant from './Post/Posts/SellWant';
import Volunteers from './Post/Posts/Volunteers';
import Party from './Post/Posts/Party';
import LookingForFriends from './Post/Posts/LookingForFriends';
import PlayGames from './Post/Posts/PlayGames';

class PostForm extends React.Component{ 

  render() {
      if (this.props.PostInfo.show && this.props.PostInfo.Post_Title === 'LOST PET'){
        return (
          <LostPet hidePost={this.props.hidePost} submitPost={this.props.submitPost} uploadImage={this.props.uploadImage} handleChange={this.props.handleChange} PostInfo={this.props.PostInfo} onChangeComplete={this.props.onChangeComplete}/>
        );
      }
      else if (this.props.PostInfo.show && this.props.PostInfo.Post_Title === 'LESSONS'){
        return (
          <Lessons hidePost={this.props.hidePost} submitPost={this.props.submitPost} handleChange={this.props.handleChange} PostInfo={this.props.PostInfo} onChangeComplete={this.props.onChangeComplete}/>
        );
      }
      else if (this.props.PostInfo.show && this.props.PostInfo.Post_Title === 'CAR POOL'){
        return (
          <CarPool hidePost={this.props.hidePost} submitPost={this.props.submitPost} handleChange={this.props.handleChange} PostInfo={this.props.PostInfo} onChangeComplete={this.props.onChangeComplete}/>
        );
      } 
      else if (this.props.PostInfo.show && this.props.PostInfo.Post_Title === 'JOB POSTING'){
        return (
          <JobPosting hidePost={this.props.hidePost} submitPost={this.props.submitPost} handleChange={this.props.handleChange} PostInfo={this.props.PostInfo} onChangeComplete={this.props.onChangeComplete}/>
        );
      } 
      else if (this.props.PostInfo.show && this.props.PostInfo.Post_Title === 'SHIFT COVERAGE'){
        return (
          <ShiftCoverage hidePost={this.props.hidePost} submitPost={this.props.submitPost} handleChange={this.props.handleChange} PostInfo={this.props.PostInfo} onChangeComplete={this.props.onChangeComplete}/>
        );
      } 
      else if (this.props.PostInfo.show && this.props.PostInfo.Post_Title === 'SELLING-WANTED'){
        return (
          <SellWant hidePost={this.props.hidePost} submitPost={this.props.submitPost} handleChange={this.props.handleChange} PostInfo={this.props.PostInfo} onChangeComplete={this.props.onChangeComplete}/>
        );
      } 
      else if (this.props.PostInfo.show && this.props.PostInfo.Post_Title === 'VOLUNTEERS'){
        return (
          <Volunteers hidePost={this.props.hidePost} submitPost={this.props.submitPost} handleChange={this.props.handleChange} PostInfo={this.props.PostInfo} onChangeComplete={this.props.onChangeComplete}/>
        );
      } 
      else if (this.props.PostInfo.show && this.props.PostInfo.Post_Title === 'PARTY'){
        return (
          <Party hidePost={this.props.hidePost} submitPost={this.props.submitPost} handleChange={this.props.handleChange} PostInfo={this.props.PostInfo} onChangeComplete={this.props.onChangeComplete}/>
        );
      } 
      else if (this.props.PostInfo.show && this.props.PostInfo.Post_Title === 'LOOKING FOR FRIENDS'){
        return (
          <LookingForFriends hidePost={this.props.hidePost} submitPost={this.props.submitPost} handleChange={this.props.handleChange} PostInfo={this.props.PostInfo} onChangeComplete={this.props.onChangeComplete}/>
        );
      } 
      else if (this.props.PostInfo.show && this.props.PostInfo.Post_Title === 'PLAY GAMES'){
        return (
          <PlayGames hidePost={this.props.hidePost} submitPost={this.props.submitPost} handleChange={this.props.handleChange} PostInfo={this.props.PostInfo} onChangeComplete={this.props.onChangeComplete}/>
        );
      }       
      else {
        return null
      }
  }
}

export default PostForm;