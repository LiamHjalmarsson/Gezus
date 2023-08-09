import { useCallback, useState } from "react"

const useHttp = () => {
    let [isLoading, setIsLoading] = useState(false);
    let [isError, setIsError] = useState(false);

    let sendRequest = useCallback( async (requestConfig, applyData) => {
        setIsError(false);
        setIsLoading(true);

        let response = await fetch(requestConfig.url, {
            method: requestConfig.method ? requestConfig.method : "GET",
            headers: requestConfig.headers ? requestConfig.headers : {},
            body: requestConfig.body ? requestConfig.body : null
        });

        console.log(response);

        let recourse = await response.json();

        if (recourse.error) {
            setIsError(recourse.error);
        } else {
            applyData(recourse);
        }

        setIsLoading(false);
    }, []);

    return {
        isLoading,
        isError,
        sendRequest
    }

}

export default useHttp;