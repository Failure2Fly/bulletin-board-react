import React from 'react';
import Nav from './Components/Nav';
import Bulletin from './Components/Bulletin';
import PostForm from './Components/PostForm';

class Index extends React.Component {

    constructor(){
        super();

        this.state = {
            show: false,
            Post_Title: 'TITLE',
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
        this.showPost = this.showPost.bind(this);
        this.hidePost = this.hidePost.bind(this);

    }

    showPost = (title) => {
        this.setState({
            show: true,
            Post_Title: title
        });
        console.log(this.state.show)
    };

    hidePost = () => {
        this.setState({
            show: false
        });
    };


    render() {
        return (
            <div>
                <div className="Container">
                    <div className="row justify-content-center">
                        <Nav showPost={this.showPost} PostInfo = {this.state}/>
                        <Bulletin PostInfo = {this.state}/>
                        <PostForm hidePost={this.hidePost}  PostInfo = {this.state}/>
                    </div>
                </div>
            </div>
        )
    }   
}

export default Index;