import React, { useCallback, useEffect } from 'react';

interface IGeolocation {
    latitude: number;
    longitude: number;
}

const useGeoLocation = (getLiveGeoLocation = false) => {
    const [error, setError] = React.useState<string>('');
    const [position , setPosition] = React.useState< IGeolocation | null>(null);

    const setGeoLocation:PositionCallback = React.useCallback(({coords}) => {
        setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
        })
    }, []);

    const handleError:PositionErrorCallback = useCallback((error) => {
        setError(error.message);
      }, []);

    useEffect(() => {
        if (!navigator || !navigator.geolocation) {
            setError('Geolocation is not supported');
            return;
        }

        if (getLiveGeoLocation) {
            const watcher =
              navigator.geolocation.watchPosition(setGeoLocation, handleError);
            return () => navigator.geolocation.clearWatch(watcher);
          }

          navigator.geolocation.getCurrentPosition(setGeoLocation, handleError);
    }, [setGeoLocation, handleError, getLiveGeoLocation]);


    return [position, error];
};

export default useGeoLocation;