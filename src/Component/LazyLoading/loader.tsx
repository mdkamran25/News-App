import React from "react"

const Loader = () => {
  return (
    <>
      <div className="container pt-5 mt-5 h-100 d-flex flex-column align-items-center justify-content-center">
        <div>
          <div className="spinner-grow text-danger pt-5 mt-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning pt-5 mt-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-info pt-5 mt-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>

        <h5>Loading...</h5>
      </div>
    </>
  )
}

export default Loader