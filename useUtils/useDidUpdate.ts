import React from 'react';

const useDidUpdate = (callback:React.EffectCallback, dependancyArray:React.DependencyList) => React.useEffect(callback , dependancyArray);

export default useDidUpdate;