import React from 'react';

export default function PostTimeAvailable({setPostTimeAvailableFrom, setPostTimeAvailableTo}){

    return (
        <div className="form-group">
            <h5>Time Available</h5>
            <div className="time-available">
            <p>FROM: </p><input type="time" className="form-control" id="time-available" placeholder="Time" name="Post_TimeAvailableFrom" onChange={e => setPostTimeAvailableFrom(e.target.value)}></input>
            </div>
            <div className="time-available">
            <p>TO: </p><input type="time" className="form-control" id="time-available" placeholder="Time" name="Post_TimeAvailableTo" onChange={e => setPostTimeAvailableTo(e.target.value)}></input>
            </div>
        </div>
    )  
}
