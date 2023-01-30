import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Quotes } from "../quotes/Quotes";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Firas Chaouch </span>
            from <span className="purple"> Tunisia, Tunis.</span>
            <br />I am a Software Engineer will graduate soon from Esprit 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Travelling
            </li> */}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            <Quotes/>
          </p>
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard