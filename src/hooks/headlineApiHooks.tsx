import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ErrorType {
  message: string;
}

const useHeadlineApiHooks = <T extends {}>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<ErrorType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T>(url);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err as ErrorType); 
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};

export default useHeadlineApiHooks;
