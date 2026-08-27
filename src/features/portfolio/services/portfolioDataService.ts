import { validatePortfolioData } from "../model/portfolioDataSchema";
import { PortfolioData } from "../model/types";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const PORTFOLIO_DATA_PATH = `${BASE_PATH}/data.json`;

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

    const parsedData = validatePortfolioData(await response.json());
    this.data = parsedData;
    return parsedData;
  }
}
