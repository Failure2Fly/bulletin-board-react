import React from 'react';

class PostSalary extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Salary</h5>
                <input type="number" className="form-control" id="salary-range" placeholder="Salary"></input>
            </div>
        )
    }   
}

export default PostSalary;