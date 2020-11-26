
import React from 'react';
import Item2 from "./item2";
import { Animated } from "react-animated-css";
function Typewriter2(props) {
  var textArr = props.text.split("");
  return (
    <h1>
      {textArr.map((charItem, i) =>
        <span>
          <Animated animationOut="fadeOut" animationOutDuration={15000} animationOutDelay={4000} isVisible={false}>
            <Animated animationIn="zoomIn" animationInDuration={10000} animationInDelay={4000} isVisible={true}>
              <Animated animationIn="fadeInDownBig" animationInDuration={1000} animationInDelay={300 * i + 4000} isVisible={true}>
                <Item2 charItem={charItem} n={i} key={"item-" + i} />
              </Animated>
              <Animated animationIn="fadeInDownBig" animationInDuration={1000} animationInDelay={300 * i + 4050} isVisible={true}>
                <Item2 charItem={charItem} n={i} key={"item-" + i} />
              </Animated>
              <Animated animationIn="fadeInDownBig" animationInDuration={1000} animationInDelay={300 * i + 4100} isVisible={true}>
                <Item2 charItem={charItem} n={i} key={"item-" + i} />

              </Animated>
              <Animated animationIn="fadeIn" animationInDuration={1000} animationInDelay={300 * i + 4300} isVisible={true}>
                <Animated animationOut="jello" animationOutDuration={1000} animationOutDelay={300 * i + 4300} isVisible={false}>
                  <Item2 charItem={charItem} n={i} key={"item-" + i} />
                </Animated>
              </Animated>
            </Animated>
          </Animated>
        </span>
      )}
    </h1>
  )
}
// fadeInUpBig
export default Typewriter2;