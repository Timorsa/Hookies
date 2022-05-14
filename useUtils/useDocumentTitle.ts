import React from 'react';

const useDocumentTitle = (documentTitle: string , keepAfterUnmount = false) => {
    const initialDocTitle = React.useRef(document.title);
    
    React.useEffect(() => {
        return () => {
        if(!keepAfterUnmount){
            document.title = initialDocTitle as unknown as string;
        }
    }
    }, [])

    React.useEffect(() => {
        document.title = documentTitle;
    }, [documentTitle])
}

export default useDocumentTitle;