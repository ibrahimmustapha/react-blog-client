import Axios from 'axios';
import React, { useEffect, useState } from 'react';

function MainPage() {

    const [postList, setPostList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:2500/api/get")
        .then((data) => {
            setPostList(data.data)
        })
    }, []);

    return (
      <div className="">
        <h1 className="articles">Articles</h1>
        <div className="">
            {postList.map((val, key) => {
                return (
                  <div className="row" key={key}>
                    <div className="card">
                      <h3>{val.title}</h3>
                      <h6>
                        {val.description}  |  <span style={{color: "#000"}}>{val.AddedOnDate}</span>
                      </h6>
                      <p className="ppp">{val.post_text}</p>
                      <h6>{val.username}</h6>
                    </div>
                  </div>
                );
            })}
        </div>
      </div>
    );
}


export default MainPage;