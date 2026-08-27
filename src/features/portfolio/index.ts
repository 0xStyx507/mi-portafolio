export { default as PortfolioPage } from "./components/PortfolioPage";
export { CONFIG, TEXTS } from "./content/copy";
export { usePortfolioData } from "./hooks/usePortfolioData";
export type {
  Education,
  Experience,
  PortfolioData,
  PortfolioLink,
  Project,
} from "./model/types";
export { PROJECT_ORIGINS, PROJECT_STATUSES } from "./model/types";
export { validatePortfolioData } from "./model/portfolioDataSchema";
export { PortfolioDataService } from "./services/portfolioDataService";
