import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [IsPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [color] = useState('#7dbdbd');


  useEffect(() => {
  const abortCont = new AbortController();

    setTimeout(() => {
      fetch( url, {signal: abortCont.signal})
        .then(res => {
          if(!res.ok){
            throw Error("Could not fetch the data for that resource");
          }

          return res.json();
        })
        .then(data => {
          setData(data);
          setIsPending(false);
      })
      .catch(err => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        }else  {
          setIsPending(false);
          setError(err.message);
        }

      })
    }, 1000);

    return () => abortCont.abort();

  },[url]);

  return {data, IsPending, color, error};
}

export default useFetch;