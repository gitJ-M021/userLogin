import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loginform from './components/loginForm';

const App = () => {

  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    name: "",
    password: ""
  });
  const [adminUser, setadminUser] = useState({
    username: "admin",
    password: "password"
  });

  useEffect(() => { getUserInfo() }, []);

  const getUserInfo = () => {
    axios.get("https://randomuser.me/api/0.8/?results=20")
      .then(function (result) {
        if (result.status == 200) {
          const jsonData = result.data;
          localStorage.setItem('items_LocSt', JSON.stringify(jsonData.results));
          setData(jsonData)
        }
      }).catch(function (e) {
        console.log(e)
      });
  }

  const Login = details => {
    if (details.username == "" || details.password == "") {
      alert("Please enter the details")
    }
    else if (details.username == adminUser.username && details.password == adminUser.password) {
      setUser({
        name: details.username,
        password: details.password
      });
    }
    else {
      alert("Invalid credentails!!")
    }
  }

  const Logout = e => {
    e.preventDefault();
    setUser({
      name: "",
      password: ""
    })
  }

  return (
    <div className="App">
      {(user.name != "") ? (
        <div className="welcome">
          <button className="btn" onClick={Logout}>Logout</button>
          <h2><span>Welcome {user.name} !!</span></h2>
          <table className="test">
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {data.results.map((obj, i) => {
                return (
                  <tr>
                    <td> {obj.user.name.title + '.' + ' ' + obj.user.name.first + ' ' + obj.user.name.last}</td>
                    <td>{obj.user.gender}</td>
                    <td>{obj.user.dob}</td>
                    <td>{obj.user.email}</td>
                    <td>{obj.user.phone}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>) : (<Loginform Login={Login} />)}
    </div>
  );
}

export default App;
