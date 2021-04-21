import React from 'react';
import Nav from './Components/Nav';
import Bulletin from './Components/Bulletin';
import PostForm from './Components/PostForm';
import {firebase} from '../firebase';

class Index extends React.Component {

    constructor(){
        super();

        this.state = {
            show: false,
            Post_Date: "",
            Post_Description: "",
            Post_Email: "",
            Post_Game: "",
            Post_Hobbies: "",
            Post_Image: "",
            Post_ItemForSale_Wanted: "",
            Post_JobDescription: "",
            Post_JobTitle: "",
            Post_LessonType: "",
            Post_Location: "",
            Post_PhoneNumber: "",
            Post_Price: "",
            Post_Requirements: "",
            Post_Reward: "",
            Post_SalaryRange: "",
            Post_Sell_Want: "",
            Post_ShiftTimeAvailable1: "",
            Post_ShiftTimeAvailable2: "",
            Post_ShiftTimeAvailable3: "",
            Post_ShiftTimeAvailable4: "",
            Post_ShiftTimeNeeded: "",
            Post_SpacesLeft: "",
            Post_Time: "",
            Post_TimeAvailableFrom: "",
            Post_TimeAvailableTo: "",
            Post_TimeFrame: "",
            Post_TimeSubmitted: "",
            Post_Title: "",
            Post_Type: "",
            Post_Where: ""
        }  
        this.showPost = this.showPost.bind(this);
        this.hidePost = this.hidePost.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitPost = this.submitPost.bind(this);
    }

    showPost = (title) => {
        this.setState({
            show: true,
            Post_Title: title
        });
    };

    hidePost = () => {
        this.setState({
            show: false
        });
    };

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        })
        console.log(event)
    }
    
    submitPost = () => {
        firebase.database().ref('Posts/' + this.state.Post_Title + '/').push().set({
            Date: this.state.Post_Date,
            Description: this.state.Post_Description,
            Email: this.state.Post_Email,
            Game: this.state.Post_Game,
            Hobbies: this.state.Post_Hobbies,
            Image: this.state.Post_Image,
            ItemForSale_Wanted: this.state.Post_ItemForSale_Wanted,
            JobDescription: this.state.Post_JobDescription,
            JobTitle: this.state.Post_JobTitle,
            LessonType: this.state.Post_LessonType,
            Location: this.state.Post_Location,
            PhoneNumber: this.state.Post_PhoneNumber,
            Price: this.state.Post_Price,
            Requirements: this.state.Post_Requirements,
            Reward: this.state.Post_Reward,
            SalaryRange: this.state.Post_SalaryRange,
            ShiftTimeAvailable: {
                TimeAvailable1: this.state.Post_ShiftTimeAvailable1,
                TimeAvailable2: this.state.Post_ShiftTimeAvailable2,
                TimeAvailable3: this.state.Post_ShiftTimeAvailable3,
                TimeAvailable4: this.state.Post_ShiftTimeAvailable4
            },
            ShiftTimeNeeded: this.state.Post_ShiftTimeNeeded,
            SpacesLeft: this.state.Post_SpacesLeft,
            Time: this.state.Post_Time,
            TimeAvailableFrom: this.state.Post_TimeAvailableFrom,
            TimeAvailableTo: this.state.Post_TimeAvailableTo,
            TimeSubmitted: Date(),
            Title: this.state.Post_Title,         
            Type: this.state.Post_Type,       
            Where: this.state.Post_Where
        })       
    }

    render() {
        return (
            <div>
                <div className="Container">
                    <div className="row justify-content-center">
                        <Nav showPost={this.showPost} PostInfo={this.state}/>
                        <Bulletin PostInfo={this.state}/>
                        <PostForm hidePost={this.hidePost} submitPost={this.submitPost} PostInfo={this.state} handleChange={this.handleChange}/>
                    </div>
                </div>
            </div>
        )
    }   
}

export default Index;