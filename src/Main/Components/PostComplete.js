import React from 'react';
import {firebasePosts, 
  // firebaseDatabase, 
  // firebaseLostPet, firebaseLessons, firebaseCarPool, firebaseJobPosting, firebaseShiftCoverage, firebaseSellWant, firebaseVolunteers, firebaseParty, firebaseLookingForFriends, firebasePlayGames
} from '../../firebase';

class PostComplete extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
      Posts: []
    }
    
  }

  componentDidMount(){
    firebasePosts.limitToFirst(6).on("value", snapshot => {
      let Posts = [];
      snapshot.forEach(snap => {
        Posts.push(snap.val());
        this.setState({Posts: Posts})
      })
      console.log(Posts)
    })
    // alert("ATTENTION! ATTENTION! ATTENTION! ATTENTION! ATTENTION! --------------------------------------------------------------------------- This is a work in progress. Some aspects of this project do not work yet. Such as, the 'Search For A Post' buttons or the pagination, as well as a few other features. A lot wanting to be added. Gotta start somewhere. --------------------------------------------------------------------------- You can create a post and see it displayed. Will only display first 6 posts that have been created, until pagination is working.")
    
  }

  // componentDidUpdate(props, snapshot) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.Posts !== props.Posts) {
  //     this.fetchData(this.props.Posts);
  //   }
  // }


  render() {
    return (
      <div className="post-list">
        {this.state.Posts.map(data => {
          if(data.Type === "LOST PET") {
            return (
              <div className="post-complete" style={{backgroundColor: data.BackgroundColor}}>
                <div className="form-group post-title">
                  <h2>{data.Type}</h2>
                </div>
                <img src={data.Image} className="post-image"></img>
                <table class="table post-results">
                  <tbody>

                    <tr>
                      <th scope="row">Description</th>
                      <td>{data.Description}</td>
                    </tr>
                    <tr>
                      <th scope="row">Phone Number</th>
                      <td>{data.PhoneNumber}</td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td>{data.Email}</td>
                    </tr>
                    <tr>
                      <th scope="row">Reward</th>
                      <td>{data.Reward}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          }
          else if(data.Type === "LESSONS") {
            return (
              <div className="post-complete" style={{backgroundColor: data.BackgroundColor}}>
                <div className="form-group post-title">
                  <h2>{data.Type}</h2>
                </div>
                <table class="table post-results">
                  <tbody>
                    <tr>
                      <th scope="row">Lesson Type</th>
                      <td>{data.LessonType}</td>
                    </tr>
                    <tr>
                      <th scope="row">Price per hour</th>
                      <td>{data.Price}</td>
                    </tr>
                    <tr>
                      <th scope="row">Phone Number</th>
                      <td>{data.PhoneNumber}</td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td>{data.Email}</td>
                    </tr>
                    <tr>
                      <th scope="row">Time Available From</th>
                      <td>{data.TimeAvailableFrom}</td>
                    </tr>
                    <tr>
                      <th scope="row">Time Available To</th>
                      <td>{data.TimeAvailableTo}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          }
          else if(data.Type === "CAR POOL") {
            return (
              <div className="post-complete" style={{backgroundColor: data.BackgroundColor}}>
                <div className="form-group post-title">
                  <h2>{data.Type}</h2>
                </div>
                <table class="table post-results">
                  <tbody>
                    <tr>
                      <th scope="row">Date</th>
                      <td>{data.Date}</td>
                    </tr>
                    <tr>
                      <th scope="row">Time</th>
                      <td>{data.Time}</td>
                    </tr>
                    <tr>
                      <th scope="row">PhoneNumber</th>
                      <td>{data.PhoneNumber}</td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td>{data.Email}</td>
                    </tr>
                    <tr>
                      <th scope="row">Spots Left</th>
                      <td>{data.SpacesLeft}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          }
          else if(data.Type === "JOB POSTING") {
            return (
              <div className="post-complete" style={{backgroundColor: data.BackgroundColor}}>
                <div className="form-group post-title">
                  <h2>{data.Type}</h2>
                </div>
                <table class="table post-results">
                  <tbody>
                    <tr>
                      <th scope="row">Job Title</th>
                      <td>{data.JobTitle}</td>
                    </tr>
                    <tr>
                      <th scope="row">Job Requirements</th>
                      <td>{data.JobRequirements}</td>
                    </tr>
                    <tr>
                      <th scope="row">Job Description</th>
                      <td>{data.JobDescription}</td>
                    </tr>
                    <tr>
                      <th scope="row">Salary</th>
                      <td>{data.SalaryRange}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          }
          else if(data.Type === "SHIFT COVERAGE") {
            return (
              <div className="post-complete" style={{backgroundColor: data.BackgroundColor}}>
                <div className="form-group post-title">
                  <h2>{data.Type}</h2>
                </div>
                <table class="table post-results">
                  <tbody>
                    <tr>
                      <th scope="row">Shift Time Needing Covered</th>
                      <td>{data.ShiftTimeNeeded}</td>
                    </tr>
                    <tr>
                      <th scope="row">Shift Times Available To Trade</th>
                      <td>{data.ShiftTimeAvailable.TimeAvailable1}</td>
                    </tr>
                    {/* <tr>
                      <th></th>
                      <td>{data.ShiftTimeAvailable.TimeAvailable2}</td>
                    </tr>
                    <tr>
                      <th></th>
                      <td>{data.ShiftTimeAvailable.TimeAvailable3}</td>
                    </tr>
                    <tr>
                      <th></th>
                      <td>{data.ShiftTimeAvailable.TimeAvailable4}</td>
                    </tr> */}
                    <tr>
                      <th scope="row">Phone Number</th>
                      <td>{data.PhoneNumber}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          }
          else if(data.Type === "SELLING-WANTED") {
            return (
              <div className="post-complete" style={{backgroundColor: data.BackgroundColor}}>
                <div className="form-group post-title">
                  <h2>{data.Sell_Want}</h2>
                </div>
                <table class="table post-results">
                  <tbody>
                    <tr>
                      <th scope="row">Item {data.Sell_Want}</th>
                      <td>{data.ItemForSale_Wanted}</td>
                    </tr>
                    <tr>
                      <th scope="row">Description</th>
                      <td>{data.Description}</td>
                    </tr>
                    <tr>
                      <th scope="row">Price</th>
                      <td>{data.Price}</td>
                    </tr>
                    <tr>
                      <th scope="row">Phone Number</th>
                      <td>{data.PhoneNumber}</td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td>{data.Email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          }
          else if(data.Type === "VOLUNTEERS") {
            return (
              <div className="post-complete" style={{backgroundColor: data.BackgroundColor}}>
                <div className="form-group post-title">
                  <h2>{data.Type}</h2>
                </div>
                <table class="table post-results">
                  <tbody>
                    <tr>
                      <th scope="row">Address</th>
                      <td>{data.Where}</td>
                    </tr>
                    <tr>
                      <th scope="row">Date</th>
                      <td>{data.Date}</td>
                    </tr>
                    <tr>
                      <th scope="row">Time</th>
                      <td>{data.Time}</td>
                    </tr>
                    <tr>
                      <th scope="row">Description</th>
                      <td>{data.Description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          }
          else if(data.Type === "PARTY") {
            return (
              <div className="post-complete" style={{backgroundColor: data.BackgroundColor}}>
                <div className="form-group post-title">
                  <h2>{data.Type}</h2>
                </div>
                <table class="table post-results">
                  <tbody>
                    <tr>
                      <th scope="row">Where</th>
                      <td>{data.Where}</td>
                    </tr>
                    <tr>
                      <th scope="row">Date</th>
                      <td>{data.Date}</td>
                    </tr>
                    <tr>
                      <th scope="row">Time</th>
                      <td>{data.Time}</td>
                    </tr>
                    <tr>
                      <th scope="row">Description</th>
                      <td>{data.Description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          }
          else if(data.Type === "LOOKING FOR FRIENDS") {
            return (
              <div className="post-complete" style={{backgroundColor: data.BackgroundColor}}>
                <div className="form-group post-title">
                  <h2>{data.Type}</h2>
                </div>
                <table class="table post-results">
                  <tbody>
                    <tr>
                      <th scope="row">Hobbies</th>
                      <td>{data.Hobbies}</td>
                    </tr>
                    <tr>
                      <th scope="row">Phone Number</th>
                      <td>{data.PhoneNumber}</td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td>{data.Email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          }
          else if(data.Type === "PLAY GAMES") {
            return (
              <div className="post-complete" style={{backgroundColor: data.BackgroundColor}}>
                <div className="form-group post-title">
                  <h2>{data.Type}</h2>
                </div>
                <table class="table post-results">
                  <tbody>
                    <tr>
                      <th scope="row">Game</th>
                      <td>{data.Game}</td>
                    </tr>
                    <tr>
                      <th scope="row">Time</th>
                      <td>{data.Time}</td>
                    </tr>
                    <tr>
                      <th scope="row">Date</th>
                      <td>{data.Date}</td>
                    </tr>
                    <tr>
                      <th scope="row">Description</th>
                      <td>{data.Description}</td>
                    </tr>
                    <tr>
                      <th scope="row">Phone Number</th>
                      <td>{data.PhoneNumber}</td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td>{data.Email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          }    
        })}
      </div>
    )
  }
}


export default PostComplete;








