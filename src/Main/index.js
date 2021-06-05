import React from 'react';
import Nav from './Components/Nav';
import Bulletin from './Components/Bulletin';
import PostForm from './Components/PostForm';
import {firebasePosts, firebaseLostPet, firebaseLessons, firebaseCarPool, firebaseJobPosting, firebaseShiftCoverage, firebaseSellWant, firebaseVolunteers, firebaseParty, firebaseLookingForFriends, firebasePlayGames} from '../firebase';
import * as filestack from 'filestack-js';

const client = filestack.init('AHNLMQPjSLusKOLv01SOhz');

class Index extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            show: false,
            Post_Background_Color: "#fff",
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
            Post_Where: "",
            Posts: []
        }  
        this.showPost = this.showPost.bind(this);
        this.hidePost = this.hidePost.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitPost = this.submitPost.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
        // this.onChangeComplete = this.onChangeComplete.bind(this);
        // this.searchForPost = this.searchForPost.bind(this);
        // this.callForPosts = this.callForPosts.bind(this);
    }

    // callForPosts(){
    //     firebasePosts.limitToFirst(6).on("value", snapshot => {
    //         let Posts = [];
    //         snapshot.forEach(snap => {
    //             Posts.push(snap.val());
    //             this.setState({Posts: Posts})
    //         })
    //         console.log(Posts)
    //     })
    //     // alert("ATTENTION! ATTENTION! ATTENTION! ATTENTION! ATTENTION! --------------------------------------------------------------------------- This is a work in progress. Some aspects of this project do not work yet. Such as, the 'Search For A Post' buttons or the pagination, as well as a few other features. A lot wanting to be added. Gotta start somewhere. --------------------------------------------------------------------------- You can create a post and see it displayed. Will only display first 6 posts that have been created, until pagination is working.")
    // }


    showPost = (title) => {
        this.setState({
            show: true,
            Post_Title: title
        });
    };

    hidePost = () => {
        this.setState({
            show: false,
            Post_Background_Color: '#fff'
        });
    };

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        })
        console.log(event)
        console.log(this.state.Post_Title)
    }

    onChangeComplete = (color) => {
        console.log(this.state.Post_Background_Color)
        console.log(color)
        this.setState({ Post_Background_Color: color.hex });
        console.log(this.state.Post_Background_Color)
    };
    

    uploadImage() {
        console.log('Hello')
        const options = {
            accept: ["image/*"],
            onFileUploadFinished: file => {
                this.setState({Post_Image: file.url});        
            }
        };
        client.picker(options).open();
	}

    // searchForPost(post){
    //     firebaseDatabase.ref('Posts/' + post ).limitToFirst(6).on("value", snapshot => {
    //         let Posts = [];
    //         snapshot.forEach(snap => {
    //             Posts.push(snap.val());
    //             this.setState({Posts: Posts})
    //         })
    //         console.log(Posts)
    //     })
    // }

    // submitPost = () => {
    //     console.log(this.state.Post_Title)
    //     if(this.state.Post_Title === "LOST PET"){
    //         db.collection("Posts").add({
    //             // TimeSubmitted: Date(),
    //             Type: this.state.Post_Title,
    //             Image: this.state.Post_Image,
    //             Description: this.state.Post_Description,
    //             Email: this.state.Post_Email,
    //             PhoneNumber: this.state.Post_PhoneNumber,
    //             Reward: this.state.Post_Reward
    //         })
    //         .then(() => {
    //             console.log("Document successfully written!");
    //         })
    //         .catch((error) => {
    //             console.error("Error writing document: ", error);
    //         });
    //     }
    //     console.log('working')
    // }


    submitPost = () => {
        if(this.state.Post_Title === "LOST PET"){
            firebasePosts.push().set({ 
                TimeSubmitted: Date(),
                Type: this.state.Post_Title,
                Image: this.state.Post_Image,
                Description: this.state.Post_Description,
                Email: this.state.Post_Email,
                PhoneNumber: this.state.Post_PhoneNumber,
                Reward: this.state.Post_Reward,
                BackgroundColor: this.state.Post_Background_Color
            })
            firebaseLostPet.push().set({ 
                TimeSubmitted: Date(),
                Type: this.state.Post_Title,
                Image: this.state.Post_Image,
                Description: this.state.Post_Description,
                Email: this.state.Post_Email,
                PhoneNumber: this.state.Post_PhoneNumber,
                Reward: this.state.Post_Reward,
                BackgroundColor: this.state.Post_Background_Color
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
                LessonType: this.state.Post_LessonType,
                BackgroundColor: this.state.Post_Background_Color
            })
            firebaseLessons.push().set({
                TimeSubmitted: Date(),
                Type: this.state.Post_Title, 
                TimeAvailableFrom: this.state.Post_TimeAvailableFrom,
	            TimeAvailableTo: this.state.Post_TimeAvailableTo,
                Price: this.state.Post_Price,
                PhoneNumber: this.state.Post_PhoneNumber,
                Email: this.state.Post_Email,
                LessonType: this.state.Post_LessonType,
                BackgroundColor: this.state.Post_Background_Color
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
                SpacesLeft: this.state.Post_SpacesLeft,
                BackgroundColor: this.state.Post_Background_Color
            })
            firebaseCarPool.push().set({
                TimeSubmitted: Date(),
                Type: this.state.Post_Title, 
                Time: this.state.Post_Time,
                Date: this.state.Post_Date,
                PhoneNumber: this.state.Post_PhoneNumber,
                Email: this.state.Post_Email,
                SpacesLeft: this.state.Post_SpacesLeft,
                BackgroundColor: this.state.Post_Background_Color
            })
        }
        else if (this.state.Post_Title === "JOB POSTING"){
            firebasePosts.push().set({
                TimeSubmitted: Date(),
                Type: this.state.Post_Title, 
                JobTitle: this.state.Post_JobTitle,
                JobDescription: this.state.Post_Description,
                SalaryRange: this.state.Post_SalaryRange,
                JobRequirements: this.state.Post_JobRequirements,
                BackgroundColor: this.state.Post_Background_Color
            })
            firebaseJobPosting.push().set({
                TimeSubmitted: Date(),
                Type: this.state.Post_Title, 
                JobTitle: this.state.Post_JobTitle,
                JobDescription: this.state.Post_Description,
                SalaryRange: this.state.Post_SalaryRange,
                JobRequirements: this.state.Post_JobRequirements,
                BackgroundColor: this.state.Post_Background_Color
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
                PhoneNumber: this.state.Post_PhoneNumber,
                BackgroundColor: this.state.Post_Background_Color
            })
            firebaseShiftCoverage.push().set({
                TimeSubmitted: Date(),
                Type: this.state.Post_Title, 
                ShiftTimeNeeded: this.state.Post_ShiftTimeNeeded,
                ShiftTimeAvailable: {
                    TimeAvailable1: this.state.Post_ShiftTimeAvailable1,
                    TimeAvailable2: this.state.Post_ShiftTimeAvailable2,
                    TimeAvailable3: this.state.Post_ShiftTimeAvailable3,
                    TimeAvailable4: this.state.Post_ShiftTimeAvailable4
                },
                PhoneNumber: this.state.Post_PhoneNumber,
                BackgroundColor: this.state.Post_Background_Color
            })
        }
        else if (this.state.Post_Title === "SELLING-WANTED"){
            firebasePosts.push().set({ 
                TimeSubmitted: Date(),
                Type: this.state.Post_Title,
                Sell_Want: this.state.Post_Sell_Want,
                ItemForSale_Wanted: this.state.Post_ItemForSale_Wanted,
                Description: this.state.Post_Description,
                Price: this.state.Post_Price,
                PhoneNumber: this.state.Post_PhoneNumber,
                Email: this.state.Post_Email,
                BackgroundColor: this.state.Post_Background_Color
            })
            firebaseSellWant.push().set({ 
                TimeSubmitted: Date(),
                Type: this.state.Post_Title,
                Sell_Want: this.state.Post_Sell_Want,
                ItemForSale_Wanted: this.state.Post_ItemForSale_Wanted,
                Description: this.state.Post_Description,
                Price: this.state.Post_Price,
                PhoneNumber: this.state.Post_PhoneNumber,
                Email: this.state.Post_Email,
                BackgroundColor: this.state.Post_Background_Color
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
                Description: this.state.Post_Description,
                BackgroundColor: this.state.Post_Background_Color
            })
            firebaseVolunteers.push().set({ 
                TimeSubmitted: Date(),
                Type: this.state.Post_Title,
                SellWant: this.state.Post_Sell_Want,
                Where: this.state.Post_Where,
                Time: this.state.Post_Time,
                Date: this.state.Post_Date,
                Description: this.state.Post_Description,
                BackgroundColor: this.state.Post_Background_Color
            })
        }
        else if (this.state.Post_Title === "PARTY"){
            firebasePosts.push().set({ 
                TimeSubmitted: Date(),
                Type: this.state.Post_Title,
                Where: this.state.Post_Where,
                Time: this.state.Post_Time,
                Date: this.state.Post_Date,
                Description: this.state.Post_Description,
                BackgroundColor: this.state.Post_Background_Color
            })
            firebaseParty.push().set({ 
                TimeSubmitted: Date(),
                Type: this.state.Post_Title,
                Where: this.state.Post_Where,
                Time: this.state.Post_Time,
                Date: this.state.Post_Date,
                Description: this.state.Post_Description,
                BackgroundColor: this.state.Post_Background_Color
            })
        }
        else if (this.state.Post_Title === "LOOKING FOR FRIENDS"){
            firebasePosts.push().set({ 
                TimeSubmitted: Date(),
                Type: this.state.Post_Title,
                Hobbies: this.state.Post_Hobbies,
                PhoneNumber: this.state.Post_PhoneNumber,
                Email: this.state.Post_Email,
                BackgroundColor: this.state.Post_Background_Color
            })
            firebaseLookingForFriends.push().set({ 
                TimeSubmitted: Date(),
                Type: this.state.Post_Title,
                Hobbies: this.state.Post_Hobbies,
                PhoneNumber: this.state.Post_PhoneNumber,
                Email: this.state.Post_Email,
                BackgroundColor: this.state.Post_Background_Color
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
                Email: this.state.Post_Email,
                BackgroundColor: this.state.Post_Background_Color
            })
            firebasePlayGames.push().set({ 
                TimeSubmitted: Date(),
                Type: this.state.Post_Title,
                Game: this.state.Post_Game,
                Time: this.state.Post_Time,
                Date: this.state.Post_Date,
	            Description: this.state.Post_Description,
                PhoneNumber: this.state.Post_PhoneNumber,
                Email: this.state.Post_Email,
                BackgroundColor: this.state.Post_Background_Color
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
                        <Bulletin PostInfo={this.state} />
                        <PostForm hidePost={this.hidePost} submitPost={this.submitPost} PostInfo={this.state} uploadImage={this.uploadImage} onChangeComplete={this.onChangeComplete} handleChange={this.handleChange} />
                    </div>
                </div>
            </div>
        )
    }   
}

export default Index;