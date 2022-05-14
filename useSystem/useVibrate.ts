import React from 'react';

export type Vibrate = number | number[];

export const DEFAULT_VIBRATE_VALUE: Vibrate = 200;

const useVibrate = (value: Vibrate = DEFAULT_VIBRATE_VALUE) => {
  const vibrate = React.useCallback(() => {
      navigator.vibrate(value);
    }, [value]);

  return [vibrate];
};

export default useVibrate