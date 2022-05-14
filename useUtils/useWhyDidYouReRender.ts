import React from 'react';

function useWhyDidYouRerender(ComponentName:string, ComponentProps:any) {
  const savedComponentProps = React.useRef<any>();

  React.useEffect(() => {
    if (savedComponentProps.current) {
      const propKeys = Object.keys({ ...savedComponentProps.current, ...ComponentProps })
      const changesObj:any={};
      propKeys.forEach((key) => {
        if (savedComponentProps.current[key] !== ComponentProps[key]) {
          changesObj[key] = {
            propertyName: key,  
            from: savedComponentProps?.current[key],
            to: ComponentProps[key],
          };
        }
      });

      if (Object.keys(changesObj).length) {
        console.warn('[useWhyDidYouRerender] : ', {
            component: ComponentName, 
            changesObj});
      }
    }
    savedComponentProps.current = ComponentProps;
});
}

export default useWhyDidYouRerender;