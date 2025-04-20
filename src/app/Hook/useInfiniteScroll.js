import { useEffect } from "react";

const useInfiniteScroll = (ref, callback) => {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback(); // Trigger load more
      }
    });

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, callback]);
};

export default useInfiniteScroll;
