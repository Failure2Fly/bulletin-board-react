import React, {useEffect } from 'react';
import { onValue } from 'firebase/database';
// import { doc, getDocs } from "firebase/firestore";
import {firebasePosts} from '../firebase.js';


export default function PostComplete({posts, setPosts}){

  // const q = query(firebasePosts);
  // const docRef = doc(firebasePosts);
  // const querySnapshot =  getDocs(docRef);

  useEffect(() => {
    const callPosts = () => {
      onValue(firebasePosts, (snapshot) => {
        snapshot.forEach((snap) => {
          // posts.push() here is no good, you need to do mutable updates instead of mutating the state
          // also, use the callback setState when the next state depends on the previous
          setPosts((posts) => [...posts, snap.val()])
        })
        // console.log(info);
        // setPosts((posts) => [...posts, info]);
      });
    }

    // make sure you clean up the subscription to prevent memory leaks
    return () => {
      callPosts()
    }

  }, [setPosts])



  // const callPosts =  () => {
  //   onValue(firebasePosts, (snapshot) => {
  //     const data = snapshot.val();
  //     console.log(data);
  //     setPosts((posts) => [...posts, data]);
  //     console.log(posts);
  //   });
  // }

  // useEffect(() => {
  //   callPosts();      
  // }, [])

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
      })}
    </div>
  )   
}









