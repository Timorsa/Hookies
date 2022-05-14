import React, { useEffect } from 'react';

const useDidUpdate = (callback:React.EffectCallback, dependancyArray:React.DependencyList) => useEffect(callback , dependancyArray);

export default useDidUpdate;