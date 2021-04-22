import React from 'react';
import {firebasePosts} from '../../../../firebase';

class PostComplete extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
      Posts: []
    }
  }

  // componentDidMount(){
  //   firebase.database().ref('Posts/' + 'LOST PET/').on('value', (snapshot) => {
  //     const data = snapshot.val();
  //     console.log(data);
  //     // showCompletePosts()
  //     return data;
  //   });
  // }

  // componentDidMount(){
  //   getfirebasePosts.orderByChild("Posts").equalTo("Lost Pet").on("child_added",
  //     function(snapshot) {
  //       console.log(snapshot.key);
  //     }
  //   );
  // }

  componentDidMount(){
    firebasePosts.on("value", snapshot => {
      let Posts = [];
      snapshot.forEach(snap => {
        Posts.push(snap.val());
        this.setState({Posts: Posts})
      })
    })
    
  }

  // showCompletePosts = (data) => (
  //   data ?
  //       data.map((data)=>(
  //         <div className="post-complete">
  //           <div className="form-group post-title">
  //               <h2>LOST PET</h2>
  //           </div>
  //           <div className="post-inputs">
  //             {this.data.Description}
  //           </div>
  //         </div>
  //       ))
  //   : null
  // ) 

  render() {
    return (
      <div className="bulletin">
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
                  {data.Price}
                </div>
                <div>
                  {data.TimeAvailableFrom}
                </div>
                <div>
                  {data.JobTitle}
                </div>
                <div>
                  {data.Image}
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








