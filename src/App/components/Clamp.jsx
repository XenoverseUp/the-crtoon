import { createElement, forwardRef } from "react";

const Clamp = forwardRef(
  ({ clamp = 1, element = "p", children, ...rest }, ref) => {
    const style = {
      display: "-webkit-box",
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: clamp,
    };

    return createElement(element, { style, ref, ...rest }, children);
  }
);

export default Clamp;
