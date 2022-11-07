// import { useEffect, useState } from "react";

// const REPO_URL_PATHS = ["yahtzee", "weather-app-react"];

// const useFetchRepos = () => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     (async () => {
//       setIsLoading(true);
//       try {
//         const result = await fetch();
//       } catch (err) {
//         console.error(err.statusText);
//         setError(err);
//       }
//     })();
//   }, []);

//   return { data, isLoading, error };
// };
