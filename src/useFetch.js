import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const abortController = new AbortController();

  useEffect(() => {
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Couldn't fetch data from the database..");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setError(null);
          setIsPending(false);
        })
        .catch((e) => {
          if (!e.name === "AbortError") {
            setError(e.message);
            setIsPending(true);
            console.log(e.message);
          }
        });
    }, 500);

    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
