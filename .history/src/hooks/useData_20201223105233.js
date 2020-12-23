import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = (query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const baseURL = 'https://data.police.uk/api';

  const getData = async (query) => {
    setIsError(false);
    setIsLoading(true);

    try {
      const { data } = await axios.get(query);
      setTimeout(() => {
        setData(data);
        setIsLoading(false);
      }, 300);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getData(query);
  }, [query]);

  return [data, isLoading, isError, getData];
};

export default useData;
