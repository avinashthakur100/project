"use client";
import { useEffect, useRef, useCallback } from "react";

const useAutoHoverScroll = (scrollContainerRef, options = {}) => {
  const {
    scrollSpeed = 2,
    scrollZoneHeight = 100,
    intervalDelay = 10,
    trigger,
  } = options;
  const intervalRef = useRef(null);

  const stopScrolling = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  const onMouseMove = useCallback((e) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { top, bottom } = container.getBoundingClientRect();
    const mouseY = e.clientY;

    stopScrolling();

    if (mouseY < top + scrollZoneHeight) {
      intervalRef.current = setInterval(() => {
        container.scrollBy({ top: -scrollSpeed, behavior: 'auto' });
      }, intervalDelay);
    } else if (mouseY > bottom - scrollZoneHeight) {
      intervalRef.current = setInterval(() => {
        container.scrollBy({ top: scrollSpeed, behavior: 'auto' });
      }, intervalDelay);
    }
  }, [scrollContainerRef, scrollZoneHeight, scrollSpeed, intervalDelay, stopScrolling]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
        container.scrollBy({ top: scrollSpeed, behavior: 'auto' });
    

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", stopScrolling);
    container.addEventListener("mouseup", stopScrolling);

    return () => {
      stopScrolling();
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", stopScrolling);
      container.removeEventListener("mouseup", stopScrolling);
    };
  }, [onMouseMove, stopScrolling, trigger ]);
};

export default useAutoHoverScroll;
