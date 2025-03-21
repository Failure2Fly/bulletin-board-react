import React from 'react';
// import { getDatabase, ref, onValue, query, orderByChild, orderByKey, orderByValue, startAt, startAfter, limitToFirst, endAt, endBefore, limitToLast} from "firebase/database";
// import {firebasePosts} from './firebase.js';


export default function PostComplete({posts}){


  return (
    <div className="post-list">
      {posts.map(data => {
        if(data.Type === "LOST PET") {
          return (
            <div className="post-complete" style={{backgroundColor: data.BackgroundColor}}>
              <div className="form-group post-title">
                <h2>{data.Type}</h2>
              </div>
              <img src={data.Image} alt="" className="post-image"></img>
              <table className="table post-results">
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
              <table className="table post-results">
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
              <table className="table post-results">
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
              <table className="table post-results">
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
              <table className="table post-results">
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
              <table className="table post-results">
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
              <table className="table post-results">
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
              <table className="table post-results">
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
              <table className="table post-results">
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
              <table className="table post-results">
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
        else {
          return null;
        }   
      })}
    </div>
  )   
}









