import React from 'react';

const useRenderCounter = () => {
    const renderCounter = React.useRef(0);
    renderCounter.current++;
    return [renderCounter];
}

export default useRenderCounter;