import React from 'react';

const SCROLL_EVENT = 'scroll';

const useInfiniteScroll = (callback: () => void) => {
  const [fetchingData, setFetchingData] = React.useState(false);

  const handleScroll = () => {
      const shouldFetchData =  !(window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
        fetchingData)
        setFetchingData(shouldFetchData);
  }

  React.useEffect(() => {
    if (fetchingData){
        callback();
    };
  }, [fetchingData, callback]);

  React.useEffect(() => {
    window.addEventListener(SCROLL_EVENT, handleScroll);
    return () => window.removeEventListener(SCROLL_EVENT, handleScroll);
  }, []);

  return [fetchingData, setFetchingData];
};

export default useInfiniteScroll;