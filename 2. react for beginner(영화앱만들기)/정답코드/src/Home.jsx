import React from "react";

const Movies = function ({ data }) {
  return (
    <div>
      <h3>toDos({data.length})</h3>
      <ul>
        {data.map((datum) => (
          <li key={datum.id}>
            <a href={`/detail/${datum.id}`}>{datum.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Home = function () {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(0);
  const fetchData = async function () {
    const url = "https://jsonplaceholder.typicode.com/todos/";
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(1);
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  // console.log(data);
  return <div>{loading ? <Movies data={data} /> : <h3>Loading...</h3>}</div>;
};

export default Home;
