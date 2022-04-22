import "./CustomCursor.scss";

const CustomCursor = ({ cursorRef, outerRef, pointerRef }) => {
  return (
    <>
      <span className="outer" ref={outerRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          viewBox="0 0 400 400"
        >
          <defs>
            <path
              d="M0, 200a200, 200 0 1, 0 400, 0a200, 200 0 1, 0 -400, 0"
              id="txt-path"
            ></path>
          </defs>

          <text>
            <textPath
              textLength="1120"
              startOffset="0"
              xlinkHref="#txt-path"
              lengthAdjust="spacing"
            >
              {"CRTOON  ".repeat(2)}
            </textPath>
          </text>
        </svg>
      </span>
      <div className="cursor" ref={cursorRef}>
        <div className="pointer" ref={pointerRef}>
          CLICK
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
