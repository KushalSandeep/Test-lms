import React, { Fragment } from "react";
import "./Course.css";
import Media from "react-media";

function Course({ image, semester, batch, title }) {
  return (
    <div>
      <Media
        queries={{
          small: "(max-width: 450px)",
          medium: "(min-width: 450px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small && (
              <div className="contain2">
                <img className="imgInfo" src={image} alt="" />
                <div className="info">
                  <div className="sembatch">
                    <h4>{semester}</h4>
                    <h4>{batch}</h4>
                  </div>
                  <h2>{title}</h2>
                </div>
              </div>
            )}
            {matches.medium && (
              <div className="contain">
                <img className="imgInfo" src={image} alt="" />
                <div className="info">
                  <div className="sembatch">
                    <h4>{semester}</h4>
                    <h4>{batch}</h4>
                  </div>
                  <h2>{title}</h2>
                </div>
              </div>
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
}

export default Course;
