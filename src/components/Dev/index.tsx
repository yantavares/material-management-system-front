import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DevContainer } from "./styles";

const Dev = ({ name, url }) => {
  return (
    <DevContainer href={url}>
      <FontAwesomeIcon icon={faGithub} size="lg" />
      {name}
    </DevContainer>
  );
};

export default Dev;
