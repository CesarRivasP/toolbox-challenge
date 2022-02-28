import { useCallback, useEffect, useState, useRef } from "react"
import { API } from '../config/api';

export default function useFetch({
  request,
  body,
  onMountFetch,
}){
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const calledOnMount = useRef(false);

  const handleFetchData = useCallback(async () => {
    if(!request || loading) return;
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
    if(!onMountFetch || calledOnMount.current === true || loading) return;
    calledOnMount.current = true;
    handleFetchData();
  }, [onMountFetch, handleFetchData]);

  return {
    data,
    error,
    loading,
    handleFetchData,
  };
}
