import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxiosFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        if (mounted) {
          setData(response.data);
        }
      } catch (error) {
        if (mounted) {
          setError(error);
        }
      }
      if (mounted) {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useAxiosFetch;
