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
        if(this.state.Post_Title === "LOST PET"){
            firebase.database().ref('Posts/' + 'LOST PET/').push().set({ 
                TimeSubmitted: Date(),
                Image: this.state.Post_Image,
                Description: this.state.Post_Description,
                Email: this.state.Post_Email,
                PhoneNumber: this.state.Post_PhoneNumber,
                Reward: this.state.Post_Reward
            })
        }        
        else if (this.state.Post_Title === "LESSONS"){
            firebase.database().ref('Posts/' + 'LESSONS/').push().set({
                TimeSubmitted: Date(), 
                TimeAvailableFrom: this.state.Post_TimeAvailableFrom,
	            TimeAvailableTo: this.state.Post_TimeAvailableTo,
                Price: this.state.Post_Price,
                PhoneNumber: this.state.Post_PhoneNumber,
                Email: this.state.Post_Email,
                LessonType: this.state.Post_LessonType
            })
        }
        else if (this.state.Post_Title === "CAR POOL"){
            firebase.database().ref('Posts/' + 'CAR POOL/').push().set({
                TimeSubmitted: Date(), 
                Time: this.state.Post_Time,
                Date: this.state.Post_Date,
                PhoneNumber: this.state.Post_PhoneNumber,
                Email: this.state.Post_Email,
                SpacesLeft: this.state.Post_SpacesLeft
            })
        }
        else if (this.state.Post_Title === "JOB POSTING"){
            firebase.database().ref('Posts/' + 'JOB POSTING/').push().set({
                TimeSubmitted: Date(), 
                JobTitle: this.state.Post_JobTitle,
                JobDescription: this.state.Post_JobDescription,
                SalaryRange: this.state.Post_SalaryRange,
                JobRequirements: this.state.Post_Requirements
            })
        }
        else if (this.state.Post_Title === "SHIFT COVERAGE"){
            firebase.database().ref('Posts/' + 'SHIFT COVERAGE/').push().set({
                TimeSubmitted: Date(), 
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
            firebase.database().ref('Posts/' + 'SELLING-WANTED/').push().set({ 
                TimeSubmitted: Date(),
                ItemForSale_Wanted: this.state.Post_ItemForSale_Wanted,
                Price: this.state.Post_Price,
                PhoneNumber: this.state.Post_PhoneNumber,
                Email: this.state.Post_Email
            })
        }
        else if (this.state.Post_Title === "VOLUNTEERS"){
            firebase.database().ref('Posts/' + 'SELLING-WANTED/').push().set({ 
                TimeSubmitted: Date(),
                SellWant: this.state.Post_Sell_Want,
                Where: this.state.Post_Where,
                Time: this.state.Post_Time,
                Date: this.state.Post_Date,
                Description: this.state.Post_Description
            })
        }
        else if (this.state.Post_Title === "PARTY"){
            firebase.database().ref('Posts/' + 'PARTY/').push().set({ 
                TimeSubmitted: Date(),
                Where: this.state.Post_Where,
                Time: this.state.Post_Time,
                Date: this.state.Post_Date,
                Description: this.state.Post_Description
            })
        }
        else if (this.state.Post_Title === "LOOKING FOR FRIENDS"){
            firebase.database().ref('Posts/' + 'LOOKING FOR FRIENDS/').push().set({ 
                TimeSubmitted: Date(),
                Hobbies: this.state.Post_Hobbies,
                PhoneNumber: this.state.Post_PhoneNumber,
                Email: this.state.Post_Email
            })
        }
        else if (this.state.Post_Title === "PLAY GAMES"){
            firebase.database().ref('Posts/' + 'PLAY GAMES/').push().set({ 
                TimeSubmitted: Date(),
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