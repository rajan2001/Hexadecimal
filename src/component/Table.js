import React from "react";
import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";


const head = ["id", "name", "username", "email", "website"];

function Table() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleclick = (id) => {
    navigate(`/user/${id}`)
  };
  return (
    <>
      <table>
        <tbody>
          <tr>
            {head.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
          {data.map((res) => (
            <tr key={res.id}>
              <td onClick={() => handleclick(res.id)} className="table_id">
                {res.id}
              </td>
              <td>{res.name}</td>
              <td>{res.username}</td>
              <td>{res.email}</td>
              <td>{res.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
