import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Natural Language Processing",
          "Machine Learning",
          "Deep Learning",
          "Computer Vision",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 25,
        delay: 25,
      }}
    />
  );
}

export default Type;
