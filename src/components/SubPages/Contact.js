import React from "react";
import Panel from "./Panel";

const Contact = () => {
  return (
    <div>
      <div className="title-panel-container">
        <Panel
          titlePanel={true}
          title={<div className="page-title">Contact</div>}
          content={
            <div className="panel-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              quod incidunt facere optio! Exercitationem libero eos corporis at.
              Est fuga exercitationem debitis itaque alias adipisci eos
              repudiandae temporibus quos animi!
            </div>
          }
          bottom={false}
          // change this
        />

        <div className="contact-list">
          <Panel
            title={<div className="contact-title">E-mail</div>}
            content={
              <div className="contact-info">isaac.bergl@outlook.com</div>
            }
            horizontal={true}
            bottom={false}
          />
          <Panel
            title={<div className="contact-title">Phone</div>}
            content={<div className="contact-info">+61 43 960 473</div>}
            horizontal={true}
            bottom={false}
          />
          <Panel
            title={<div className="contact-title">LinkedIn</div>}
            content={<div className="contact-info">my profile</div>}
            horizontal={true}
            bottom={false}
          />
          <Panel
            title={<div className="contact-title">Github Profile</div>}
            content={<div className="contact-info">my profile</div>}
            horizontal={true}
            bottom={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
