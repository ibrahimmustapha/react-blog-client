import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

function MainPage() {

    const [postList, setPostList] = useState([]);
    let history = useHistory();

    useEffect(() => {
        Axios.get("http://localhost:2500/api/get")
        .then((data) => {
            setPostList(data.data)
        })
    }, []);

    return (
      <div className="blogs"> 
        <h1 className="articles">Blogs</h1>
        <div className="grid-container">
            {postList.map((val, key) => {
                return (
                  <div className="row" key={key}>
                    <div className="wrapper">
                      <div
                        className="card"
                        onClick={() => {
                          history.push(`/post/${val.id}`);
                        }}
                      >
                        <h3>{val.title}</h3>
                        <h6>
                          {val.category} |{" "}
                          <span style={{ color: "#000" }}>
                            {val.AddedOnDate}
                          </span>
                        </h6>
                        <p className="ppp">{val.description}</p>
                        <h6>{val.username}</h6>
                      </div>
                    </div>
                  </div>
                );
            })}
        </div>
      </div>
    );
}


export default MainPage;