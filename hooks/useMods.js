import { useEffect, useState } from "react";

export default function useMods() {

  const [mods, setMods] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  const requestOptions = {
    headers : {
      "X-ACCESS-KEY" : process.env.X_ACCES_KEY
    }
  }

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/632da911a1610e638635d3e7/latest", requestOptions)
      .then(res => res.json())
      .then((result) => {
          if(result.record){
            setIsLoaded(true)
            setMods(result.record)
          }
          setIsLoaded(true)
          setError(result.message)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, []);

  return {mods, isLoaded, error};
}
