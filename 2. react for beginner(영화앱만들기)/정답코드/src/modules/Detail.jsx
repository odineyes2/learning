import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const Detail = function () {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const dataFetch = async function () {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const json = await res.json();
    setData(json);
  };
  dataFetch();
  return (
    <div>
      <h3>This page is for details..</h3>
      <ul>
        <li>ID : {data.id}</li>
        <li>To Do : {data.title}</li>
        <li>UserID : {data.userId}</li>
        <li>Done? : {data.completed ? "Done :)" : "Not Yet :("}</li>
      </ul>
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default Detail;
