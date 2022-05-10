import React, { useState } from "react";
import axios from "axios";

const URL = "http://localhost:8080/api/v1/person/";

const CrudDemo = () => {
  const [persons, setPersons] = useState([]);
  const GetAll = async () => {
    await axios.get(URL).then((res) => {
      console.log(res);

      setPersons(res.data);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button type="button" className="btn btn-info" onClick={GetAll}>
            Get All persons
          </button>
        </div>
      </div>
      <br />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.email}</td>
              <td>{person.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudDemo;
