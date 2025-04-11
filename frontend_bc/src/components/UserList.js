import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils";
const UserList = () => {
const [users, setUser] = useState([]);

useEffect(()=>{
    getUsers();
},[]);

const getUsers = async () =>{
    const response = await axios.get(`${BASE_URL}/users`);
    setUser(response.data);
};

const deleteUser = async (id) =>{
    try {
        await axios.delete(`${BASE_URL}/users/${id}`);
        getUsers();
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
      <h1 className="title has-text-centered has-text-primary"> Notes</h1>
      <div className="is-flex is-justify-content-space-between mb-4">
        <Link to={`add`} className="button is-success is-rounded">Add New</Link>
      </div>
      <table className="table is-striped is-fullwidth is-hoverable">
        <thead>
          <tr className="has-background-primary-light">
            <th className="has-text-centered">No</th>
            <th>Creator</th>
            <th>Title</th>
            <th>Notes</th>
            <th className="has-text-centered">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td className="has-text-centered">{index + 1}</td>
              <td>{user.creator}</td>
              <td>{user.title}</td>
              <td>{user.notes}</td>
              <td className="is-flex is-justify-content-center">
                <Link to={`edit/${user.id}`} className="button is-small is-info is-light is-rounded mr-2">Edit</Link>
                <button 
                  onClick={() => deleteUser(user.id)} 
                  className="button is-small is-danger is-light is-rounded"
                >
                   Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default UserList;
