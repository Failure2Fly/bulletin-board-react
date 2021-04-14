import React, { Component} from 'react';
import Nav from './Nav';

class Index extends Component{

  state = {
    show: false, 
    Post_Title: 'Title',
    Post_Description: '',
    Post_Email: '',
    Post_PhoneNumber: '',
    Post_Name: '',
    Post_TimeFrame: '',
    Post_Price: '',
    Post_Reward: '',
    Post_LessonType: '',
    Post_Date: '',
    Post_SpacesLeft: '',
    Post_JobTitle: '',
    Post_JobDescription: '',
    Post_SalaryRange: '',
    Post_Requirements: '',
    Post_ShiftTimeToCover: '',
    Post_ShiftTimeCanCover: '',
    Post_ItemForSale_Wanted: '',
    Post_Where: '',
    Post_Location: '',
    Post_Hobbies: '',
    Post_Game: ''
  }

  render() {
    return (
        <div className="Container">
            <div className="row justify-content-center">
                <Nav ShowPost = {this.state}/>
            </div>
        </div>
    );
  }
}

export default Index;