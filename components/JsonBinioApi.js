import { useEffect } from "react";

function JsonBinioApi({setError, setIsLoaded, setItems}) {

  const requestOptions = {
    headers : {
      "X-ACCESS-KEY" : '$2b$10$eJhLhwdtmkyX5qDRleY8NOBDCfDSvxaTVguethbH6.xyg0O4wmKw6'
    }
  }

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/632da911a1610e638635d3e7/latest", requestOptions)
      .then(res => res.json())
      .then((result) => {
          setIsLoaded(true);
          setItems(result.record);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
}

export default JsonBinioApi