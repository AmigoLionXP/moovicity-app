import { useState, useEffect } from 'react';
import { Delay } from '../types';

export const useDelays = () => {
  const [delays, setDelays] = useState<Delay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDelays();
  }, []);

  const fetchDelays = async () => {
    try {
      setLoading(true);
      // TODO: Replace with actual API call
      // const data = await api.get('/delays');
      // setDelays(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return { delays, loading, error, refetch: fetchDelays };
};
