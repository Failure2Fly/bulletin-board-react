import React from 'react';
import Bulletin from './Bulletin';
import './css/Nav.css';

class Nav extends React.Component{

    state = {
        show: false,
        Post_Title: '',
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

    showPost = (props) => {
        this.setState({
            show: true,
            Post_Title: props
        });
    };
    
    render(){
    
    return (
        <div className="Container">
            <div className="row justify-content-center">
                <div className="col nav-full col-lg-2 ">
                    <div className="row nav-header">
                        <div className="col nav-header">
                            <p>Bulletin Board</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 bulletin-lost-cat"> 
                            <button  onClick={() => {
                                this.showPost('LOST PET')}}>                      
                                <h5>Lost Pet</h5>
                            </button>   
                        </div>

                        <div className="col-12 col-md-6 bulletin-lost-cat">
                            <button onClick={() => {
                                this.showPost('LESSONS')}}>                      
                                <h5>Lessons</h5>
                            </button> 
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 bulletin-lost-cat"> 
                            <button onClick={() => {
                                this.showPost('CAR POOL')}}>                      
                                <h5>Car Pool</h5>
                            </button>   
                        </div>

                        <div className="col-12 col-md-6 bulletin-lost-cat">
                            <button onClick={() => {
                                this.showPost('JOB POSTING')}}>                      
                                <h5>Job Posting</h5>
                            </button> 
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 bulletin-lost-cat"> 
                            <button onClick={() => {
                                this.showPost('SHIFT COVERAGE')}}>                      
                                <h5>Shift Coverage</h5>
                            </button>   
                        </div>

                        <div className="col-12 col-md-6 bulletin-lost-cat">
                            <button onClick={() => {
                                this.showPost('SELLING/WANTED')}}>                      
                                <h5>Selling/
                                    Wanted</h5>
                            </button> 
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 bulletin-lost-cat"> 
                            <button onClick={() => {
                                this.showPost('VOLUNTEERS')}}>                      
                                <h5>Volunteers</h5>
                            </button>   
                        </div>

                        <div className="col-12 col-md-6 bulletin-lost-cat">
                            <button onClick={() => {
                                this.showPost('PARTY')}}>                      
                                <h5>Party</h5>
                            </button> 
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 bulletin-lost-cat"> 
                            <button onClick={() => {
                                this.showPost('LOOKING FOR FRIENDS')}}>                      
                                <h5>Looking For Friends</h5>
                            </button>   
                        </div>

                        <div className="col-12 col-md-6 bulletin-lost-cat">
                            <button onClick={() => {
                                this.showPost('PLAY GAMES')}}>                      
                                <h5>Play Games</h5>
                            </button> 
                        </div>
                    </div>
                </div>
                <div className="bulletin col col-lg-10">
                    <Bulletin ShowPost = {this.state}/>
                </div>
            </div>
        </div>
        );
    }
};





export default Nav;
