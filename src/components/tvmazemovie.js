import React from "react";
import {useParams } from "react-router-dom";
import "./tvmazemovie.css";
const TvmazeMovie = ({ users }) => {
  const { showid } = useParams();

  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((curElem) => {
            const { score, show } = curElem;
            console.log(typeof show.id);
            if (show.id === parseInt(showid)) {
              return (
                <div className="container" key={show.id}>
                  <div className="image_name">
                    <img
                      src={show.image.original}
                      alt="movieimage"
                    />
                    <h1>{show.name} </h1>
                    <h4><span>Score:</span> {score}</h4>
                    <h4><span>Genres:</span>{show.genres}</h4>
                    <h4><span>Summary:</span> { show.summary }</h4>
                    

                  </div>
                  
                </div>
              );
            } else {
              return;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default TvmazeMovie;
