import React from 'react';
import './css/Nav.css';
import searchForPost from './PostComplete';
// import {firebasePosts, firebaseDatabase, firebaseLostPet, firebaseLessons, firebaseCarPool, firebaseJobPosting, firebaseShiftCoverage, firebaseSellWant, firebaseVolunteers, firebaseParty, firebaseLookingForFriends, firebasePlayGames} from '../../firebase';

class Nav extends React.Component{

    constructor(props) {
        super(props)

    }
    
    render(){
    
    return (
        <div className="col nav-full col-lg-2 ">
            <div className="row nav-header">
                <div className="col nav-header">
                    <p>Bulletin Board</p>
                </div>
            </div>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        CREATE A POST
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <button className="post-button" onClick={() => this.props.showPost('LOST PET')} >                      
                            <h5>Lost Pet</h5>
                        </button>
                        <button className="post-button" onClick={() => this.props.showPost('LESSONS')}>                      
                            <h5>Lessons</h5>
                        </button>
                        <button className="post-button" onClick={() => this.props.showPost('CAR POOL')} >                      
                            <h5>Car Pool</h5>
                        </button>
                        <button className="post-button" onClick={() => this.props.showPost('JOB POSTING')}>                      
                            <h5>Job Posting</h5>
                        </button>
                        <button className="post-button" onClick={() => this.props.showPost('SHIFT COVERAGE')} >                      
                            <h5>Shift Coverage</h5>
                        </button>
                        <button className="post-button" onClick={() => this.props.showPost('SELLING-WANTED')}>                      
                            <h5>Selling-Wanted</h5>
                        </button>
                        <button className="post-button" onClick={() => this.props.showPost('VOLUNTEERS')} >                      
                            <h5>Volunteers</h5>
                        </button>
                        <button className="post-button" onClick={() => this.props.showPost('PARTY')}>                      
                            <h5>Party</h5>
                        </button>
                        <button className="post-button" onClick={() => this.props.showPost('LOOKING FOR FRIENDS')} >                      
                            <h5>Looking For Friends</h5>
                        </button>
                        <button className="post-button" onClick={() => this.props.showPost('PLAY GAMES')}>                      
                            <h5>Play Games</h5>
                        </button>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        SEARCH FOR A POST
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <button className="post-button" onClick={() => this.props.searchForPost('LostPet')} >                      
                            <h5>Lost Pet</h5>
                        </button>
                        <button className="post-button" onClick={() => this.props.searchForPost('Lessons')}>                      
                            <h5>Lessons</h5>
                        </button>
                        <button className="post-button" onClick={() => this.props.searchForPost('CarPool')} >                      
                            <h5>Car Pool</h5>
                        </button>
                        <button className="post-button" onClick={() => this.props.searchForPost('JobPosting')}>                      
                            <h5>Job Posting</h5>
                        </button>
                        <button className="post-button" onClick={() => this.props.searchForPost('ShiftCoverage')} >                      
                            <h5>Shift Coverage</h5>
                        </button>
                        <button className="post-button" onClick={() => this.props.searchForPost('SellWant')}>                      
                            <h5>Selling/Wanted</h5>
                        </button>
                        <button className="post-button" onClick={() => this.props.searchForPost('Volunteers')} >                      
                            <h5>Volunteers</h5>
                        </button>
                        <button className="post-button" onClick={() => this.props.searchForPost('Party')}>                      
                            <h5>Party</h5>
                        </button>
                        <button className="post-button" onClick={() => this.props.searchForPost('LookingForFriends')} >                      
                            <h5>Looking For Friends</h5>
                        </button>
                        <button className="post-button" onClick={() => this.props.searchForPost('PlayGames')}>                      
                            <h5>Play Games</h5>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        );
    }
};





export default Nav;
