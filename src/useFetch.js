import { useEffect, useState } from "react"


const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending,  setisPending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=>{
        fetch(url)
        .then(response => {
            if(!response.ok){
                throw Error("Could not fetch data for that resources")
            }
            return response.json()
        })
        .then((data)=>{
            setData(data)
            setisPending(false)
            setError(null)
        })
        .catch(err =>{
            setError(err.message);
            setisPending(false)
        })
    }, []);

    return {
        data, isPending, error
    }
} 

export default useFetch;