import React from 'react';

const useClickOutside = (ref:React.RefObject<HTMLBaseElement>, callback:any) => React.useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
        // @ts-ignore
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        callback(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
}, [ref, callback])

export default useClickOutside;