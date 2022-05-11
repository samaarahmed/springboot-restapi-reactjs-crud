import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "http://localhost:8080/api/v1/person/";

const CrudDemo = () => {
  const [persons, setPersons] = useState([]);
  const [message, setMessage] = useState();
  const [error, setError] = useState();
  const [id, setId] = useState();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    axios.get(URL).then((res) => {
      console.log(res);

      setPersons(res.data);
    });
  }, [reload]);

  //   const DeleteRequest = async () => {
  //     await axios.delete(URL + id).then((response) => {
  //       console.log(response);
  //     });
  //   };

  const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Id</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  };
  const TableAction = (props) => {
    const DeleteRequest = async () => {
      await axios.delete(URL + props.identification).then((response) => {
        console.log(response);
        setReload(!reload);
      });
    };

    return (
      <div className="d-flex align-items-center justify-content-evenly">
        <button type="button" className="btn btn-primary">
          {" "}
          Details{" "}
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={DeleteRequest}
        >
          {" "}
          Delete{" "}
        </button>
        <button type="button" className="btn btn-warning">
          {" "}
          Edit{" "}
        </button>
      </div>
    );
  };
  const TableRow = () => {
    return (
      <tbody>
        {persons.map((person) => (
          <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.email}</td>
            <td>{person.title}</td>
            <td>
              <TableAction identification={person.id} />
            </td>
          </tr>
        ))}
      </tbody>
    );
  };
  return (
    <div className="container">
      <table className="table table-striped">
        <TableHeader />
        <TableRow />
      </table>
    </div>
  );
};

export default CrudDemo;
