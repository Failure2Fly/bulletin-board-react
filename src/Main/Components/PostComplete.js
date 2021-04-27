import React from 'react';
import {firebasePosts, firebaseDatabase} from '../../firebase';

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
    })
  }

  // LostPetSearch = () => {
  //   firebaseDatabase.ref('Posts/LOST PET').limitToFirst(6).on("value", snapshot => {
  //     let Posts = [];
  //     snapshot.forEach(snap => {
  //       Posts.push(snap.val());
  //       this.setState({Posts: Posts})
  //     })
  //   })
  // }


  render() {
    return (
      <div className="post-list">
        {this.state.Posts.map(data => {
            return (
              <div className="post-complete">
                <div className="form-group post-title">
                  <h2>{data.Type}</h2>
                </div>
                <div className="post-inputs">
                  <div>
                    {data.LessonType}
                  </div>
                  <div>
                    {data.ItemForSale_Wanted}
                  </div>
                  <div>
                    {data.Price}
                  </div>
                  <div>
                    {data.JobTitle}
                  </div>
                  <div>
                    {data.Image}
                  </div>
                  <div>
                    {data.Hobbies}
                  </div>
                  <div>
                    {data.Where}
                  </div>
                  <div>
                    {data.Date}
                  </div>
                  <div>
                    {data.TimeAvailableFrom}
                  </div>
                  <div>
                  {data.TimeAvailableTo}
                  </div>
                  <div>
                    {data.Time}
                  </div>
                  <div>
                    {data.JobDescription}
                  </div>
                  <div>
                    {data.Description}
                  </div>
                  <div>
                    {data.PhoneNumber}
                  </div>
                  <div>
                    {data.Email}
                  </div>
                  <div>
                    {data.Reward}
                  </div>
                  <div>
                    {data.SalaryRange}
                  </div>
                  <div>
                    {data.JobRequirements}
                  </div>
                </div>
              </div>
            )        
        })}
      </div>
    )
  }
}

export default PostComplete;








