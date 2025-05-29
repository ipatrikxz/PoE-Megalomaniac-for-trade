import { useEffect, useState } from "react";

export default function useMods() {
  const [mods, setMods] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const ducumentLink = process.env.NEXT_PUBLIC_JsonDocumentLink;
  const X_ACCESS_KEY = process.env.NEXT_PUBLIC_JsonBinApiKey;

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
      })
      .catch((error) => {
        setError(error.message || "Something went wrong!");
        setIsLoaded(true);
      });
  }, []);

  return { mods, isLoaded, error };
}
