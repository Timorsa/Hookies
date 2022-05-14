import React from 'react';

const useToggle = (initialValue = false) => {
    const [toggleState, setToggleState] = React.useState(initialValue);

    const toggle = React.useCallback(() => {
        setToggleState(oldToggleState => !oldToggleState);
    }, [])

    return [toggleState, toggle]
};

export default useToggle;