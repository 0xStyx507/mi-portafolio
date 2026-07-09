import { PortfolioData } from "../model/types";

const PORTFOLIO_DATA_PATH = "/data.json";

export class PortfolioDataService {
  private static instance: PortfolioDataService;
  private data: PortfolioData | null = null;

  private constructor() {}

  static getInstance(): PortfolioDataService {
    if (!PortfolioDataService.instance) {
      PortfolioDataService.instance = new PortfolioDataService();
    }

    return PortfolioDataService.instance;
  }

  async loadData(): Promise<PortfolioData> {
    if (this.data) {
      return this.data;
    }

    const response = await fetch(PORTFOLIO_DATA_PATH);
    if (!response.ok) {
      throw new Error("Failed to load portfolio data");
    }

    const parsedData = (await response.json()) as PortfolioData;
    this.data = parsedData;
    return parsedData;
  }
}
