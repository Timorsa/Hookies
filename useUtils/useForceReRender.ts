import React from 'react';

const useForceRerender = () => {
    const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void
    return [forceUpdate]
}

export default useForceRerender;