import { useEffect, useState } from "react";
import { PortfolioData } from "../model/types";
import { PortfolioDataService } from "../services/portfolioDataService";

interface UsePortfolioDataResult {
  data: PortfolioData | null;
  loading: boolean;
  error: string | null;
}

export function usePortfolioData(): UsePortfolioDataResult {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const portfolioData = await PortfolioDataService.getInstance().loadData();
        setData(portfolioData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    void loadData();
  }, []);

  return { data, loading, error };
}
