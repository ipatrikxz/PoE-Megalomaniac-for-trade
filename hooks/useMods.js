import { useEffect, useState } from "react";

export default function useMods() {
  const [mods, setMods] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/jsonbin")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch from API route");
        return res.json();
      })
      .then((data) => {
        setMods(data.record || []);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error.message || "Something went wrong!");
        setIsLoaded(true);
      });
  }, []);

  return { mods, isLoaded, error };
}
