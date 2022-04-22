import { createContext, useContext, useEffect, useRef, useState } from "react";
import { CustomCursor } from "../components";
import {
  animateClick,
  animateMovement,
  closePointer,
  configureCursors,
  normalizeCursor,
  openPointer,
} from "../animations/cursorAnimations";

const Cursors = Object.freeze({
  AUTO: "auto",
  POINTER: "pointer",
  CLICK: "click",
});

const CursorContext = createContext();

export const CustomCursorProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState(Cursors.AUTO);
  let cursorRef = useRef(null);
  let outerRef = useRef(null);
  let pointerRef = useRef(null);
  const isMobile = matchMedia("(hover: none) and (pointer: coarse)");

  useEffect(() => {
    const moveMouse = e =>
      animateMovement(
        cursorRef,
        outerRef,
        { innerDelay: 0, outerDelay: 0.2 },
        e
      );
    const clickMouse = () => setCursorType(Cursors.CLICK);
    const unClickMouse = () => setCursorType(Cursors.AUTO);

    if (!isMobile.matches) {
      if (cursorType === Cursors.CLICK) {
        animateClick(cursorRef, outerRef);
      } else if (cursorType === Cursors.AUTO) {
        normalizeCursor(cursorRef, outerRef);
        closePointer(pointerRef);
      } else if (cursorType === Cursors.POINTER) {
        openPointer(pointerRef);
      }

      configureCursors(cursorRef, outerRef);
      addEventListener("mousemove", moveMouse);
      addEventListener("mousedown", clickMouse);
      addEventListener("mouseup", unClickMouse);
    }

    return () => {
      if (!isMobile.matches) {
        removeEventListener("mousemove", moveMouse);
        removeEventListener("mousedown", clickMouse);
        removeEventListener("mouseup", unClickMouse);
      }
    };
  }, [cursorType, isMobile.matches]);

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {!isMobile.matches && (
        <CustomCursor
          cursorRef={el => (cursorRef = el)}
          outerRef={el => (outerRef = el)}
          pointerRef={el => (pointerRef = el)}
        />
      )}
      {children}
    </CursorContext.Provider>
  );
};

const pointer = setCursorType => ({
  onMouseEnter: () => setCursorType(Cursors.POINTER),
  onMouseLeave: () => setCursorType(Cursors.AUTO),
});

export const usePointer = () => {
  const context = useContext(CursorContext);
  const isMobile = matchMedia("(hover: none) and (pointer: coarse)");

  return context && !isMobile.matches ? pointer(context.setCursorType) : {};
};
