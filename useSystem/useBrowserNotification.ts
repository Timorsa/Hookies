import React from 'react';

export interface INotification {
  notificationOptions?: object;
  notificationTitle: string;
}

export const DEFAULT_NOTIFICATION = {  
  notificationTitle: 'Empty Notification',
  notificationOptions: {
    dir: 'auto',
    lang: 'EN',
  },
};

const useBrowserNotification = (
    notificationTitle:string = DEFAULT_NOTIFICATION.notificationTitle , 
    notificationOptions:object = DEFAULT_NOTIFICATION.notificationOptions, 
    requestPremissionUntilGranted = false) => {
    
    if(requestPremissionUntilGranted){
        console.warn(
            '[Hookie.useNotification]: using requestPremissionUntilGranted flag, this will cause user recieving premission reuquest each time until he grants it.'
            );
    }   

    const createNotification = React.useCallback(() => { 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var notification = new Notification(notificationTitle, notificationOptions)
    } , [notificationTitle, notificationOptions])
  
    const notify = React.useCallback(() => {
      if (Notification.permission === 'granted') {
        createNotification();
        return;
      }

     if(Notification.permission !== 'denied' || requestPremissionUntilGranted) {
        Notification.requestPermission().then( permission => permission === "granted" && createNotification());
     }
     return;
    }, [createNotification, requestPremissionUntilGranted]);

  return [notify];
};

export default useBrowserNotification;