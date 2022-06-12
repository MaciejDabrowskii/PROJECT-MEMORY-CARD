import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function FooterComponent()
{
  const onClick = () =>
  {
    window
      .open("https://github.com/MaciejDabrowskii?tab=repositories", "_blank")
      .focus();
  };

  return (
    <div
      className="footer-container"
    >
      <h3
        className="footer-text"
      >
        Created by Maciej Dąbrowski
      </h3>
      <FontAwesomeIcon
        icon={faGithub}
        className="fa-solid git-icon"
        onClick={onClick}
      />
    </div>
  );
}

export default FooterComponent;
