import { useEffect, useState} from "react"

const useFetch = (url, method="GET" ) => {

    const [data,setData] =  useState(null);
    const [error,setError] = useState (null);
    const [isLoading,setIsLoading] = useState(false);
    const [options,setOptions] = useState(null);


    const postData = (data) =>{
        setOptions({
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
    }


    //async-await ile de alabiliyoruz
    useEffect(()=>{
        const fetchData = async(options) => {
            setIsLoading(true);
            try{
                const res = await fetch(url,{...options});
                if(!res.ok){
                    throw new Error(res.statusText);
                }
                const data =await res.json();
                setIsLoading(false);
                setData(data);
            }
            catch(err){
                setIsLoading(false);
                setError("hata");
                console.log(err.message);
            }
            
         }
         if (method === "GET") {
            fetchData();
         }
         if (method === "POST" && options) {
            fetchData(options);
         }
         
    },[url,options,method])

    
    /*useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
    },[url])*/
    
    return {data,isLoading,error, postData }
   
}
export default useFetch ;