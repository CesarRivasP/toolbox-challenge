import { useCallback, useEffect, useState } from "react"
import { API } from '../config/api';

export default function useFetch({
  request,
  body,
  onMountFetch,
}){
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchData = useCallback(async () => {
    if(!request) return;
    setLoading(true);
    try {
      const { data } = await API[request](body);
      setData(data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false);
    }
  }, [request, body]);

  useEffect(() => {
    if(!request || !onMountFetch) return;
    handleFetchData();
  }, [request, onMountFetch, handleFetchData]);

  return {
    data,
    error,
    loading,
    handleFetchData,
  };
}
