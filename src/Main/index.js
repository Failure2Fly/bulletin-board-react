import React from 'react';
import Nav from './Components/Nav';
import Bulletin from './Components/Bulletin';
import PostForm from './Components/PostForm';
import {firebasePosts} from '../firebase';

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
            Post_JobTitle: "",
            Post_LessonType: "",
            Post_Location: "",
            Post_PhoneNumber: "",
            Post_Price: "",
            Post_JobRequirements: "",
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
        if(this.state.Post_Title === "LOST PET"){
            firebasePosts.push().set({ 
                TimeSubmitted: Date(),
                Type: this.state.Post_Title,
                Image: this.state.Post_Image,
                Description: this.state.Post_Description,
                Email: this.state.Post_Email,
                PhoneNumber: this.state.Post_PhoneNumber,
                Reward: this.state.Post_Reward
            })
        }        
        else if (this.state.Post_Title === "LESSONS"){
            firebasePosts.push().set({
                TimeSubmitted: Date(),
                Type: this.state.Post_Title, 
                TimeAvailableFrom: this.state.Post_TimeAvailableFrom,
	            TimeAvailableTo: this.state.Post_TimeAvailableTo,
                Price: this.state.Post_Price,
                PhoneNumber: this.state.Post_PhoneNumber,
                Email: this.state.Post_Email,
                LessonType: this.state.Post_LessonType
            })
        }
        else if (this.state.Post_Title === "CAR POOL"){
            firebasePosts.push().set({
                TimeSubmitted: Date(),
                Type: this.state.Post_Title, 
                Time: this.state.Post_Time,
                Date: this.state.Post_Date,
                PhoneNumber: this.state.Post_PhoneNumber,
                Email: this.state.Post_Email,
                SpacesLeft: this.state.Post_SpacesLeft
            })
        }
        else if (this.state.Post_Title === "JOB POSTING"){
            firebasePosts.push().set({
                TimeSubmitted: Date(),
                Type: this.state.Post_Title, 
                JobTitle: this.state.Post_JobTitle,
                JobDescription: this.state.Post_Description,
                SalaryRange: this.state.Post_SalaryRange,
                JobRequirements: this.state.Post_JobRequirements
            })
        }
        else if (this.state.Post_Title === "SHIFT COVERAGE"){
            firebasePosts.push().set({
                TimeSubmitted: Date(),
                Type: this.state.Post_Title, 
                ShiftTimeNeeded: this.state.Post_ShiftTimeNeeded,
                ShiftTimeAvailable: {
                    TimeAvailable1: this.state.Post_ShiftTimeAvailable1,
                    TimeAvailable2: this.state.Post_ShiftTimeAvailable2,
                    TimeAvailable3: this.state.Post_ShiftTimeAvailable3,
                    TimeAvailable4: this.state.Post_ShiftTimeAvailable4
                },
                PhoneNumber: this.state.Post_PhoneNumber
            })
        }
        else if (this.state.Post_Title === "SELLING-WANTED"){
            firebasePosts.push().set({ 
                TimeSubmitted: Date(),
                Type: this.state.Post_Title,
                ItemForSale_Wanted: this.state.Post_ItemForSale_Wanted,
                Price: this.state.Post_Price,
                PhoneNumber: this.state.Post_PhoneNumber,
                Email: this.state.Post_Email
            })
        }
        else if (this.state.Post_Title === "VOLUNTEERS"){
            firebasePosts.push().set({ 
                TimeSubmitted: Date(),
                Type: this.state.Post_Title,
                SellWant: this.state.Post_Sell_Want,
                Where: this.state.Post_Where,
                Time: this.state.Post_Time,
                Date: this.state.Post_Date,
                Description: this.state.Post_Description
            })
        }
        else if (this.state.Post_Title === "PARTY"){
            firebasePosts.push().set({ 
                TimeSubmitted: Date(),
                Type: this.state.Post_Title,
                Where: this.state.Post_Where,
                Time: this.state.Post_Time,
                Date: this.state.Post_Date,
                Description: this.state.Post_Description
            })
        }
        else if (this.state.Post_Title === "LOOKING FOR FRIENDS"){
            firebasePosts.push().set({ 
                TimeSubmitted: Date(),
                Type: this.state.Post_Title,
                Hobbies: this.state.Post_Hobbies,
                PhoneNumber: this.state.Post_PhoneNumber,
                Email: this.state.Post_Email
            })
        }
        else if (this.state.Post_Title === "PLAY GAMES"){
            firebasePosts.push().set({ 
                TimeSubmitted: Date(),
                Type: this.state.Post_Title,
                Game: this.state.Post_Game,
                Time: this.state.Post_Time,
                Date: this.state.Post_Date,
	            Description: this.state.Post_Description,
                PhoneNumber: this.state.Post_PhoneNumber,
                Email: this.state.Post_Email
            })
        }
        else{
            return null
        }
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