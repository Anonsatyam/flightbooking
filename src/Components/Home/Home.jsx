import React from 'react'
import video from "../../assets/video/video1.mp4";
import flight from "../../assets/flight.png";

const Home = () => {
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1>Create Ever Lasting Memories With Us</h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className="video"></video>
        </div>

        <img src={flight} className="plane" alt="" />
      </div>
    </div>
  )
}

export default Home