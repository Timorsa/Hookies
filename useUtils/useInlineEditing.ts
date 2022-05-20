import React from 'react';

const useInlineEditing = (initialValue) => {
    const [value, setValue] = React.useState<any>(initialValue);
    const [updatedValue, setUpdatedValue] = React.useState<any>(initialValue);
    const isChanged = React.useMemo(() => JSON.stringify(value) !== JSON.stringify(updatedValue), [value, updatedValue]);
    const onValueChanged = (newValue) => setUpdatedValue(newValue);
    const onConfirmChange = React.useCallback(() => setValue(updatedValue), [updatedValue]);
    const onDeclineChange = React.useCallback(() => setUpdatedValue(value), [value]);

    return [updatedValue, isChanged,onValueChanged, onConfirmChange, onDeclineChange];
}

export default  useInlineEditing;