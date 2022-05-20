import React from 'react';

const useValueHistory = (value) => {
    const valueHistoryArray = React.useRef([]);

    React.useEffect(() => {
        valueHistoryArray.current.push(value);
    }, [value]);

    return [valueHistoryArray.current];
}

export default useValueHistory;