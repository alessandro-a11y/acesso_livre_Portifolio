import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

/**
 * Busca depoimentos em GET /api/depoimentos
 * Retorna: { depoimentos, loading, error }
 */
export function useDepoimentos() {
  const [depoimentos, setDepoimentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDepoimentos() {
      try {
        const res = await fetch(`${API_URL}/api/depoimentos`);
        if (!res.ok) throw new Error(`Erro ${res.status}: ${res.statusText}`);
        const data = await res.json();
        setDepoimentos(data);
      } catch (err) {
        console.error("Falha ao carregar depoimentos:", err);
        setError("Não foi possível carregar os depoimentos.");
      } finally {
        setLoading(false);
      }
    }

    fetchDepoimentos();
  }, []);

  return { depoimentos, loading, error };
}
