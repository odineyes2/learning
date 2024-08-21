import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";

const Detail = function () {
  const { id } = useParams();
  const [toDo,setTodo] = useState([]);
  
  const fetchData = async function (id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);
    setTodo(json)
  };
  
  useEffect(()=>{fetchData(id);},[]);  
  
  return <div>
    <h3>This is detail.</h3>
    <ul>      
      <li>{toDo.id}</li>
      <li>{toDo.userId}</li>
      <li>{toDo.title}</li>        
    </ul>
    <Button text="Click me."/>
  </div>;
};

export default Detail;
