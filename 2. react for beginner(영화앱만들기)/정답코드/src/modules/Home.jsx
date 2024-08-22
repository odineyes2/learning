import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = function () {
  const [loading, setLoading] = useState(0);
  const [data, setdata] =useState([]);  
  
  const fetchData = async function () {
    const url = "https://jsonplaceholder.typicode.com/todos/";
    const response = await fetch(url);
    const json = await response.json();    
    setLoading(1);
    setdata(json);       
  };

  useEffect(()=>{
    fetchData();
  })  
  return loading?<div>
      <h3>Today there are {data.length} toDos..</h3>
      <ul>
        {data.map((item=><li key={item.id}><Link to={`/detail/${item.id}`}>{item.title}</Link></li>))}
      </ul>
    </div>:<h3>Loading...</h3>;
};

export default Home;
