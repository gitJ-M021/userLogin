import React, { useState } from 'react';
import '../App.css';

function Loginform({ Login }) {

    const [details, setDetails] = useState({
        username: "",
        password: ""
    })
    const submitHandler = e => {
        e.preventDefault();
        Login(details)
    }
    return (
        <form className="form-inner" onSubmit={submitHandler}>
            <h2>Login</h2>
            <div className="form-group">
                <label htmlFor="name">Username:</label>
                <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
            </div>
            <div className="form-group">
                <label htmlFor="name">password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
            </div>
            <div className="form-group">
                <input type="submit" value="LOGIN" />
            </div>
        </form>
    )
}
export default Loginform;