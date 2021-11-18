import React from "react";

const Work = ({ fullName, deleted, change }) => {
  return (
    <div className="card text-white bg-info mb-3 mt-3 w-50 mx-auto">
      <div className="card-body">
        <p className="card-title">{`${fullName}`}</p>
        <div className="input-group justify-content-center">
          <textarea
            type="text"
            className="form-control w-50 border-0"
            value={`${fullName}`}
            onChange={change}
          />
          <div className="input-group-prepend">
            <button
              onClick={deleted}
              className="btn btn-danger btn-sm border-0  fa fa-trash"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
