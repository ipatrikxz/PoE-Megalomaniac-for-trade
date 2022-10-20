import { useEffect, useState } from "react";

export default function useMods() {

  const [mods, setMods] = useState([])
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const requestOptions = {
    headers : {
      "X-ACCESS-KEY" : process.env.X_ACCESS_KEY
    }
  }

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/632da911a1610e638635d3e7/latest", requestOptions)
      .then(res => res.json())
      .then((result) => {
          result.record ? setMods(result.record) : setError(result.message)
          setIsLoaded(true)
        }
      )
  }, []);

  return {mods, isLoaded, error};
}
