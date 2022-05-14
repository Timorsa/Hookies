import React, { useCallback } from 'react';

const ONLINE_EVENT = 'online';
const OFFLINE_EVENT = 'offline';

const useIsOnline = () => {
    const [isOnline , setIsOnline] = React.useState(true);

    const handleOnline = useCallback(() => setIsOnline(true),[])
    const handleOffline = useCallback(() => setIsOnline(false),[])
    
    React.useEffect(() => {
        setIsOnline(window.navigator.onLine);
        window.addEventListener(ONLINE_EVENT, handleOnline);
        window.addEventListener(OFFLINE_EVENT, handleOffline);
        return () => {
          window.removeEventListener(ONLINE_EVENT, handleOnline);
          window.removeEventListener(OFFLINE_EVENT, handleOffline);
        };
    }, [])

    return [isOnline];
}

export default useIsOnline;