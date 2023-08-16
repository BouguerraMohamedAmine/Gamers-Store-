import React, { useEffect, useState } from 'react';
import Details from './Details';
import axios from 'axios';

function Content() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:5000/api/product")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5000/api/items/${itemId}`);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };





  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">
            <div className="main-banner">
            <img src="https://imgs.search.brave.com/RtULqKegC3kDpCKym_p_yHalualhtvCA4CQNskVLlsY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1wc2QvZ2Ft/ZXItYmFja2dyb3Vu/ZC13aXRoLWFjY2Vz/c29yaWVzXzE0MTkt/MjM2NS5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw" />
              <div className="row">
                <div className="col-lg-7">
                  <div className="header-text">
                    <h6>Welcome To Cyborg</h6>
                    <h4><em>Browse</em> Our Popular Games Here</h4>
                    <div className="main-button">
                      <a href="browse.html">Browse Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="most-popular">
              <div className="row">
                <div className="col-lg-12">
                  <div className="heading-section">
                    <h4><em>Most Popular</em> Right Now</h4>
                  </div>
                  <div className="row">
                    {
                      data.map((element, i) => (
                        <Details element={element} key={i} />
                      ))
                    }
                  </div>
                  <div className="col-lg-12">
                    <div className="main-button">
                      <a href="browse.html">Discover Popular</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gaming-library">
              <div className="col-lg-12">
                <div className="heading-section">
                  <h4><em>Your Gaming</em> Library</h4>
                </div>
                <div className="item">
                  <ul>
                     <li><img src="https://imgs.search.brave.com/-Y1wrsTAOxqr8BKgosAtnMg8Z7t2sRYDdIqVwG4dChA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXIuZG9nL2xh/cmdlLzEwNzAwMTA2/LmpwZw" alt="" className="templatemo-item" /></li> 
                    <li><h4>Dota 2</h4><span>Sandbox</span></li>
                    <li><h4>Date Added</h4><span>24/08/2036</span></li>
                    <li><h4>Hours Played</h4><span>634 H 22 Mins</span></li>
                    <li><h4>Currently</h4><span>Downloaded</span></li>
                    <li><div className="main-border-button border-no-active"><a href="#">Downloaded</a></div></li>
                  </ul>
                </div>
                {/* Repeat similar sections for other games */}
                <div className="col-lg-12">
                  <div className="main-button">
                    <a href="profile.html">View Your Library</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

