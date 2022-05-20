import React from 'react';

const useDidUnmount = (callback: () => void) => React.useEffect(() => callback() , []);

export default useDidUnmount;