'use client';
import { useState, useEffect } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "https://api.spacexdata.com/v3"; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${endpoint}`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result);
      } catch (abcd) {
        setError(abcd.message);
       
      } finally {
        setLoading(false);
        // console.log(error);
      }
    };

    fetchData();
  }, [endpoint]);
  

  return { data, error, loading };
};

export default useFetch;
