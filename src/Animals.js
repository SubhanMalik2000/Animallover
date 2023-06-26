import { useState } from "react";
import "./Style/Animals.css";
import cow from "./svg/cow.svg";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

function Animals({ type }) {
  const svgmap = {
    cow,
    bird,
    cat,
    dog,
    gator,
    horse,
  };
  const [heartsize, setheartsize] = useState(0);
  const handleClick = () => {
    setheartsize(heartsize + 1);
  };
  return (
    <>
      <div className="Animal-Show" onClick={handleClick}>
        <img className="Animal" alt="animals" src={svgmap[type]} />
        <img
          className="heart"
          alt="heart"
          src={heart}
          style={{ width: 10 + 10 * heartsize }}
        />
      </div>
    </>
  );
}

export default Animals;
