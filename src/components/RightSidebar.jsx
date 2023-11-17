import React from 'react';

const RightSideBar = () => {
  return (
        <div className="right-col">
          <div className="profile-card">
            <div className="profile-pic">
              <img src="https://picsum.photos/400" alt="" />
            </div>
            <div>
              <p className="username">modern_web_channel</p>
              <p className="sub-text">kunaal kumar</p>
            </div>
            <button className="action-btn">switch</button>
          </div>
          
          <p className="suggestion-text">Suggestions for you</p>
          
          {/* Profile cards */}
          <div className="profile-card">
            <div className="profile-pic">
              <img src="https://picsum.photos/600" alt="" />
            </div>
            <div>
              <p className="username">modern_web_channel</p>
              <p className="sub-text">followed by user</p>
            </div>
            <button className="action-btn">follow</button>
          </div>

          {/* Repeat the above profile card structure for the remaining cards */}
          {/* ... */}

        </div>
  );
};

export default RightSideBar;
