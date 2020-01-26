import React from "react";

function Home() {
  return (
    <div>
      <div className="container">
        <div align="center" style={{ fontFamily: "Lucida Calligraphy" }}>
          <h3>Welcome to Pet@dopt</h3>
          <p></p>
          <p></p>
        </div>
        <div
          className=" border border-sm shadow p-3   rounded"
          style={{
            fontFamily: "comic sans MS",
            opacity: 1,
            width: 600,
            textAlign: "center",
            margin: "auto"
          }}
        >
          <p>If you can't adopt, FOSTER</p>
          <p>If you can't foster, VOLUNTEER</p>
          <p>If you can't volunteer, DONATE</p>
          <p>If you can't donate, EDUCATE, NETWORK, & SHARE</p>
          <p>EVERYONE can do something large or small,</p>
          <p>to save a life</p>
        </div>
        <div
          className="col-md-6 offset-md-3 footer text-11px"
          style={{ padding: "40px" }}
        >
          <div
            className="text-11px"
            style={{
              lineHeight: "1.5em"
            }}
          >
            <div className="social-media-footer">
              <span className="text">Connect with us:</span>{" "}
              <a href="https://www.facebook.com" target="_blank">
                <img
                  src="https://images.adoptapet.com/images/social_media_facebook.png"
                  alt="facebook"
                  width="12"
                  height="25"
                  border="0"
                />
              </a>{" "}
              <a href="https://twitter.com" target="_blank">
                <img
                  src="https://images.adoptapet.com/images/social_media_twitter.png"
                  alt="twitter"
                  width="22"
                  height="25"
                  border="0"
                />
              </a>{" "}
              <a href="https://www.pinterest.com" target="_blank">
                <img
                  src="https://images.adoptapet.com/images/social_media_pinterest.png"
                  alt="pinterest"
                  width="21"
                  height="25"
                  border="0"
                />
              </a>{" "}
              <a href="http://www.youtube.com" target="_blank">
                <img
                  src="https://images.adoptapet.com/images/social_media_youtube.png"
                  alt="pinterest"
                  width="21"
                  height="25"
                  border="0"
                />
              </a>{" "}
              <a href="http://instagram.com" target="_blank">
                <img
                  src="https://images.adoptapet.com/images/social_media_instagram.png"
                  alt="pinterest"
                  width="25"
                  height="25"
                  border="0"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
