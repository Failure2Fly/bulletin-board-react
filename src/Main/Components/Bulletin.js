import React from 'react';
import './css/Bulletin.css';
import './Post/Post.css';
import PostComplete from "./PostComplete";
class Bulletin extends React.Component{

  render() {
    return (
      <div className="bulletin col col-lg-10">
          <PostComplete PostComplete={this.props.PostInfo}/>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
      </div>
    )
  }
}

export default Bulletin;