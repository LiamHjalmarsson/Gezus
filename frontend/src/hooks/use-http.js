import { useCallback, useState } from "react"

const useHttp = () => {
    let [isLoading, setIsLoading] = useState(false);
    let [isError, setIsError] = useState(false);

    let sendRequest = useCallback( async (requestConfig, applyData) => {

        setIsError(false);
        
        let response = await fetch(requestConfig.url, {
            method: requestConfig.method ? requestConfig.method : "GET",
            headers: requestConfig.headers ? requestConfig.headers : {},
            body: requestConfig.body ? requestConfig.body : null
        });

        let recourse = await response.json();

        if (recourse.error) {
            setIsError(recourse.error);
        } else {
            applyData(recourse);
        }

    }, []);

    return {
        isLoading,
        isError,
        sendRequest
    }

}

export default useHttp;