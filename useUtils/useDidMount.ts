import React from 'react';

const useDidMount = (callback:React.EffectCallback) => React.useEffect(callback, []);

export default useDidMount;

