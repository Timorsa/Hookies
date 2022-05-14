import React from 'react';
import useSwipePosition from './useSwipePosition';

// SWIPE_DIRECTION can be imported & used for comparison
export enum SWIPE_DIRECTION {
  RIGHT = 'right',
  LEFT = 'left',
  UP = 'up',
  DOWN = 'down',
}

const useSwipeDirection = ( ref:React.RefObject<HTMLBaseElement>, offsetBy = 5) => {
  const { x1, y1, x2, y2 } = useSwipePosition(ref);
  const [direction, setDirection] = React.useState<SWIPE_DIRECTION | null>(null);

  React.useEffect(() => {
    if (Math.abs(x2 - x1) > Math.abs(y2 - y1) && Math.abs(x2 - x1) > offsetBy) {
      setDirection(x2 > x1 ? SWIPE_DIRECTION.RIGHT : SWIPE_DIRECTION.LEFT);
    } else if (Math.abs(y2 - y1) > offsetBy) {
      setDirection(y2 > y1 ? SWIPE_DIRECTION.DOWN : SWIPE_DIRECTION.UP);
    }
  }, [y2]);

  return [direction];
};

export default useSwipeDirection;