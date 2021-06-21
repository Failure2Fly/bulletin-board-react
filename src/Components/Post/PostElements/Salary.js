import React from 'react';

export default function PostJobSalary({setPostJobSalary}){

    return (
        <div className="form-group">
            <h5>Salary</h5>
            <input type="number" className="form-control" id="salary-range" placeholder="Salary" name="Post_SalaryRange" onChange={e => setPostJobSalary(e.target.value)}></input>
        </div>
    )
}
