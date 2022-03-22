import React from "react";
import { FcLike } from "react-icons/fc";

const CatDisplay = ({ catlist }) => {
  return (
    <div>
      <h1 id="main-heading">
        <span>AR</span>nxt
      </h1>
     < div className="container-fluid mt-5">
        <div className="row text-center">
          {catlist.map((curElem) => {
            const {catagoryId, iconUrl } = curElem;
            return (
              <div className="col-10 col-md-4 mt-5" key={catagoryId}>
                <div className="card p-2">
                  <div className="d-flex align-items-center ">
                    <div className="image">
                      <img
                        src={iconUrl}
                        alt="card-image"
                        className="rounded"
                        width="155"
                        height="155"
                      />
                    </div>
                    <div  className="mx-3">
                    <h5>{ catagoryId}{<FcLike/> } </h5>
                    </div>
                    <div className="mx-1">
                    <h5>Available:01</h5>
                    </div>                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CatDisplay;

