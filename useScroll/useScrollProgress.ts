import React from 'react';

const useScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = React.useState(0);

    const onScroll = () => {
      // This will calculate how many pixels the page is vertically
      const winScroll = document.documentElement.scrollTop;
      // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
  
      // This will calculate the final total of the percentage of how much the user has scrolled.
      const scrolled = +Number((winScroll / height) * 100).toFixed(2);
  
      setScrollProgress(scrolled);
    };
  
    React.useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return [scrollProgress]
}

export default useScrollProgress;