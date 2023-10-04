import { useEffect, useState } from "react";

export default function useMods() {
  const [mods, setMods] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const ducumentLink =
    "https://api.jsonbin.io/v3/b/632da911a1610e638635d3e7/latest";
  const X_ACCESS_KEY = process.env.JsonBinApiKey;

  const requestOptions = {
    headers: {
      "X-ACCESS-KEY": X_ACCESS_KEY,
    },
  };

  useEffect(() => {
    fetch(ducumentLink, requestOptions)
      .then((res) => res.json())
      .then((result) => {
        result.record ? setMods(result.record) : setError(result.message);
        setIsLoaded(true);
      });
  }, []);

  return { mods, isLoaded, error };
}
