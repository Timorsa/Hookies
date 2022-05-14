import React from 'react';

interface IScreenSize {
    width?: number;
    height?: number;
}

const useScreenSize = () => {
    const [screenSize, setScreenSize] = React.useState<IScreenSize>({
      width: undefined,
      height: undefined,
    });

    const handleResize = () => {
        // Set Screen width/height to state
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

    React.useEffect(() => {     
      // Add event listener
      window.addEventListener("resize", handleResize);
      
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return [screenSize];
  }

  export default useScreenSize;