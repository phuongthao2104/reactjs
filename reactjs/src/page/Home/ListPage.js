import React, { useState, useEffect, useMemo } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
const ListPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    try {
      const result = await axios.get("https://624061412aeb48a9af735b00.mockapi.io/api/v1/users");
      setLoading(false);
      setData(result.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const deleteAll = () => {
    const newData = [];
    newData.length = 0;
    setData(newData);
  }

  const deleteItem = (key) => {
    const newData = data.slice(0, key).concat(data.slice(key + 1, data.length));
    setData(newData);
  };

  const renderItem = () => {
    return data.map((value, index) => {
      return (
        <tr key={index}>
          <td>{value.id}</td>
          <td>{value.name}</td>
          <td>
            <img src={value.avatar} width="60" />
          </td>
          <td>{value.createdAt}</td>
          <td>
            <button className="btn btn-info" onClick={() => deleteItem(index)}> Delete </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      {loading ? (
        <h1 className="text-center text-info">Loading...</h1>
      ) : (
        <>
          <button className="btn btn-info" onClick={deleteAll}>Delete All</button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Avatar</th>
                <th>createdAt</th>
              </tr>
            </thead>
            <tbody>{renderItem()}</tbody>
          </Table>


        </>
      )}
    </div>
  );
};

export default ListPage;