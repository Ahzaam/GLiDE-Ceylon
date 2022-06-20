import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const TextScroller = ({ text }) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(60%,0)" },
    to: { transform: "translate(-60%,0)" },
    config: { duration: 3000 },
    reset: true,
    reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    }
  });

  return (
    <div key={key}>
      <animated.div style={scrolling}>{text} <h1> Hello React World From GLiDE Ceylon</h1>  </animated.div>
    </div>
  );
};

export default TextScroller;