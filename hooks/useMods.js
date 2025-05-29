import { useEffect, useState } from "react";

export default function useMods() {
  const [mods, setMods] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/jsonbin")
      .then((res) => {
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("API response:", data.record);

        setMods(data.record);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error.message || "Something went wrong!");
        setIsLoaded(true);
      });
  }, []);

  return { mods, isLoaded, error };
}
