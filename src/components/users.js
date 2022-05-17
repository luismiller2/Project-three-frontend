import React from "react";
import {get} from "../authService/authService"
import Footer from "./Footer";

const User = () => {

  const [allUsers, setAllUsers] = React.useState([])


  React.useEffect(() => {
    get('/users/all-users')
      .then((results) =>  setAllUsers(results.data))
      .catch((err) => console.log(err.message));
  }, []);

  

  return (
    <div>
        <br></br>
        <h1>List of users:</h1>
      {allUsers.map(function(user) {
        return (
          <div>
          <ul>
           <li> <h4>{user.username}</h4> </li>
           <li> <p>{user.email}</p> </li>
           
          </ul>
          </div>
        )
      })}

      {/* <div><Footer /></div> */}
      </div>
  );
};

export default User;
