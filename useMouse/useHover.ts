import React from 'react';

const useHover = (ref:React.MutableRefObject<any>  , delay = 0) => {
    const innerRef = React.useRef<any>(null);
    const [hoveredState, setHoveredState] = React.useState(false);

    const handleHoverChnage = React.useCallback((newHoveredState : boolean) => {
        if(delay) {
            if(innerRef.current){
                clearTimeout(innerRef.current);
            }
            innerRef.current = setTimeout(() => setHoveredState(newHoveredState), delay)
        } else {
            setHoveredState(newHoveredState)
        }
    }, [delay]);

    React.useEffect(() => {
        if (!ref.current) {
            return;
          }
      
          const currentNode = ref.current;

          const on = () => {
            handleHoverChnage(true);
          };
      
          const off = () => {
            handleHoverChnage(false);
          };
      
          const outsideOff = (e:MouseEvent) => {
            if (currentNode && !currentNode.contains(e.target)) {
                handleHoverChnage(false);
            }
          };

          currentNode.addEventListener('mouseenter', on);
          currentNode.addEventListener('mouseleave', off);
          currentNode.addEventListener('mousemove', on);
          currentNode.addEventListener('focus', on);
          currentNode.addEventListener('blur', off);
          document.addEventListener('mousemove', outsideOff);
      
          return () => {
            currentNode.removeEventListener('mouseenter', on);
            currentNode.removeEventListener('mouseleave', off);
            currentNode.removeEventListener('mousemove', on);
            currentNode.removeEventListener('focus', on);
            currentNode.removeEventListener('blur', off);
            document.removeEventListener('mousemove', outsideOff);
          };

    }, [ref, handleHoverChnage])

    return [hoveredState]
}

export default useHover;