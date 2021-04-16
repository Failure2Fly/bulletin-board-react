import React from 'react';

class PostLessonType extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Lesson Type</h5>
                <input type="text" className="form-control" id="lesson-type" placeholder="Lesson Type"></input>
            </div>
        )
    }   
}

export default PostLessonType;