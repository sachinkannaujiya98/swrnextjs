import React, { useState } from "react";
import axios from "axios";
// import { Button } from "bootstrap";

import useSWR from "swr";

export default function Users() {
  const [count, setCount] = useState(10);

  //   const address = `https://randomuser.me/api/?results=${count}`;

  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    `https://randomuser.me/api/?results=${count}`,
    fetcher
  );

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;
  console.log(data);
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.results.map((post) => {
              return (
                <tr key={post.name.first}>
                  <td>{post.name.first}</td>
                  <td>{post.name.last}</td>
                  <td>{post.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {/* <h1>{data.results.name}</h1> */}
      <button
        className="btn btn-warning btn-sm mx-auto"
        onClick={() => setCount(count + 10)}
      >
        Load More
      </button>
    </div>
  );
}
