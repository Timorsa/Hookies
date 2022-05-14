import React, { useCallback } from 'react';

const EMPTY_INITIAL_STATE = {
    height: 0,
    width: 0
}

const useComponentSize = (ref: React.MutableRefObject<any>) => {
    const [componentSize, setComponentSize] = React.useState(EMPTY_INITIAL_STATE);

    const handleResize = useCallback(() => {
        if(ref.current) {
            const {offsetWidth: width , offsetHeight: height} = ref.current;
            setComponentSize({
                width,
                height
            });
        } else {
            setComponentSize(EMPTY_INITIAL_STATE);
        }
    }, [ref])

    React.useEffect(() => {
        handleResize();

        if(ref.current){
            let resizeObserver:ResizeObserver = new ResizeObserver(handleResize);
            resizeObserver.observe(ref.current);
    
            return () => {
                resizeObserver.disconnect();
                // @ts-ignore
                resizeObserver = null;
            }
        }
    }, [ref.current]);

    return [componentSize]
}

export default useComponentSize;