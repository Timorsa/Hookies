import React from 'react';

export enum ColorMode  {
    DARK_MODE= 'dark',
    LIGH_MODE= 'light'
}

const EVENT = 'change';
const MEDIA_QUERY = '(prefers-color-scheme: dark)';

const useSystemColorMode = ():[ColorMode] => {
    const [colorMode, setColorMode] = React.useState<ColorMode>(window.matchMedia && window.matchMedia(MEDIA_QUERY).matches ? ColorMode.DARK_MODE : ColorMode.LIGH_MODE)

    const getColorMode = () => window.matchMedia(MEDIA_QUERY).matches ? ColorMode.DARK_MODE : ColorMode.LIGH_MODE
    const handleColorModeChange = () => window.requestAnimationFrame(() => setColorMode(getColorMode()))

    React.useEffect(() => {
        window.matchMedia(MEDIA_QUERY).addEventListener(EVENT, handleColorModeChange);
        return window.matchMedia(MEDIA_QUERY).removeEventListener(EVENT, handleColorModeChange)
    }, [])

    return [colorMode]
}

export default useSystemColorMode;


