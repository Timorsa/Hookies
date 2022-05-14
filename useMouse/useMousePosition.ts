import React from 'react';

const useMousePosition = () => {
    const [ position, setPosition ] = React.useState({
        x: 0,
        y:0
    });

    const setMousePosition = React.useCallback((e:MouseEvent) => setPosition({ x: e.clientX, y: e.clientY }), [])

    React.useEffect(() => {
        window.addEventListener("mousemove", setMousePosition);
        return () => {
            window.removeEventListener("mousemove", setMousePosition);
        };
    }, [setMousePosition]);

    return [position]
}

export default useMousePosition;