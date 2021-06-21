import React from 'react';

export default function PostLessonType({setPostLessonType}){

    return (
        <div className="form-group">
            <h5>Lesson Type</h5>
            <input type="text" className="form-control" id="lesson-type" placeholder="Lesson Type" name="Post_LessonType" onChange={e => setPostLessonType(e.target.value)}></input>
        </div>
    )
}
