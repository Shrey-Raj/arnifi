import React from 'react';

const Header = () => {
  return (
    <>
      <section className="main">
        <div className="wrapper">
          <div className="left-col">
            <div className="status-wrapper">
              <div className="status-card">
                <div className="profile-pic"><img src="https://picsum.photos/200" alt="" /></div>
                <p className="username">user_name_1</p>
              </div>
              <div className="status-card">
                <div className="profile-pic"><img src="https://picsum.photos/200/300" alt="" /></div>
                <p className="username">user_name_2</p>
              </div>
              <div className="status-card">
                <div className="profile-pic"><img src="https://picsum.photos/200/" alt="" /></div>
                <p className="username">user_name_3</p>
              </div>
              <div className="status-card">
                <div className="profile-pic"><img src="https://picsum.photos/300" alt="" /></div>
                <p className="username">user_name_3</p>
              </div>
              <div className="status-card">
                <div className="profile-pic"><img src="https://picsum.photos/400" alt="" /></div>
                <p className="username">user_name_3</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
