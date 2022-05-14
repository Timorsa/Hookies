import React, { useCallback } from 'react';

const useEventListener = (ref:React.RefObject<HTMLElement>, callback:(event:Event) => void, event:string) => {
    const savedHandler = React.useRef({});
    const currentElement = React.useMemo(() => ref.current, [ref]);

    const callbackWrapper = useCallback((event:Event) => {
        if(typeof savedHandler.current === 'function') {
            savedHandler.current(event);
        }
    }, [savedHandler])

	React.useEffect(() => {
		savedHandler.current = callback;
	}, [callback]);

    React.useEffect(() => {
		const isSupported = currentElement && currentElement.addEventListener;
		if (!isSupported) return;

		currentElement.addEventListener(event, callbackWrapper);

		return () => {
			currentElement.removeEventListener(event, callbackWrapper);
		};
	}, [currentElement, callbackWrapper,event]);
}

export default useEventListener;