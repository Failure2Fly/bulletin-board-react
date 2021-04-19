import React from 'react';
import './css/Nav.css';

class Nav extends React.Component{

    constructor(props){
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
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 bulletin-lost-cat"> 
                    <button  onClick={() => this.props.showPost('LOST PET')} >                      
                        <h5>Lost Pet</h5>
                    </button>   
                </div>

                <div className="col-12 col-md-6 bulletin-lost-cat">
                    <button onClick={() => this.props.showPost('LESSONS')}>                      
                        <h5>Lessons</h5>
                    </button> 
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 bulletin-lost-cat"> 
                    <button onClick={() => this.props.showPost('CAR POOL')}>                      
                        <h5>Car Pool</h5>
                    </button>   
                </div>

                <div className="col-12 col-md-6 bulletin-lost-cat">
                    <button onClick={() => this.props.showPost('JOB POSTING')}>                      
                        <h5>Job Posting</h5>
                    </button> 
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 bulletin-lost-cat"> 
                    <button onClick={() => this.props.showPost('SHIFT COVERAGE')}>                      
                        <h5>Shift Coverage</h5>
                    </button>   
                </div>

                <div className="col-12 col-md-6 bulletin-lost-cat">
                    <button onClick={() => this.props.showPost('SELLING/WANTED')}>                      
                        <h5>Selling/
                            Wanted</h5>
                    </button> 
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 bulletin-lost-cat"> 
                    <button onClick={() => this.props.showPost('VOLUNTEERS')}>                      
                        <h5>Volunteers</h5>
                    </button>   
                </div>

                <div className="col-12 col-md-6 bulletin-lost-cat">
                    <button onClick={() => this.props.showPost('PARTY')}>                      
                        <h5>Party</h5>
                    </button> 
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 bulletin-lost-cat"> 
                    <button onClick={() => this.props.showPost('LOOKING FOR FRIENDS')}>                      
                        <h5>Looking For Friends</h5>
                    </button>   
                </div>

                <div className="col-12 col-md-6 bulletin-lost-cat">
                    <button onClick={() => this.props.showPost('PLAY GAMES')}>                      
                        <h5>Play Games</h5>
                    </button> 
                </div>
            </div>
        </div>

        );
    }
};





export default Nav;
