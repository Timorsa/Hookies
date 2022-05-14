import React from 'react';

const KEY_UP_EVENT = 'keyup';
const KEY_DOWN_EVENT = 'keydown';

const useIsKeyPress = (targetedKey:string, callback?: () => void) => {
    const [isKeyPressed, setIsKeyPressed] = React.useState(false);

    const hanldeKeyDown = React.useCallback(({key}:KeyboardEvent) => {
        if(key === targetedKey){
            setIsKeyPressed(false);
        }
        if( typeof callback === 'function'){
            callback();
        }
    }, [targetedKey, callback])

    const handleKeyUp = React.useCallback(({key}:KeyboardEvent) => {
        if(key === targetedKey){
            setIsKeyPressed(true);
        }
    }, [targetedKey])

    React.useEffect(() => {
        window.addEventListener(KEY_DOWN_EVENT, hanldeKeyDown);
        window.addEventListener(KEY_UP_EVENT, handleKeyUp);
        return () => {
          window.removeEventListener(KEY_DOWN_EVENT, hanldeKeyDown);
          window.removeEventListener(KEY_UP_EVENT, handleKeyUp);
        }
    }, []);

    return [isKeyPressed]
}

export default useIsKeyPress;