import React from 'react';
import useScreenSize from './useScreenSize';

export enum ScreenOrientationTypes {
    PORTRAIT = 'portrait',
    LANDSCAPE = 'landscape',

};

const useScreenOrientation = () => {
    const [screenSize] = useScreenSize();
    const [screenOrientation, setScreenOrientation] = React.useState<ScreenOrientationTypes | null>(null)

    React.useEffect(() => {
        if(screenSize.height && screenSize.width){
            setScreenOrientation(screenSize.width <= screenSize.height ? ScreenOrientationTypes.PORTRAIT : ScreenOrientationTypes.LANDSCAPE);
        }
    }, [screenSize]);

    return [screenOrientation]
};

export default useScreenOrientation;