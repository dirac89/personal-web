// src/data/projects.js
import bgDynamicPricing from "../assets/bg_pricing_aviation.png";
import bgFlightDemand from "../assets/bg_demand_aviation.png";
import bgSeatAllocation from "../assets/bg_seating_aviation.png";

const projects = [
  {
    title: "Dynamic Pricing Model",
    description:
      "Machine learning model that optimizes luggage pricing per request, integrated in production via real-time API.",
    tech: ["Python", "AWS", "Machine Learning", "API"],
    github: "https://github.com/dirac89/dynamic-pricing-model",
    featured: true,
    bgImage: bgDynamicPricing,
  },
  {
    title: "Flight Demand Forecasting",
    description:
      "Model that predicts flight occupancy 25 weeks in advance using time series and route-based clustering.",
    tech: ["Redshift", "Airflow", "MLOps"],
    github: "https://github.com/dirac89/flight-demand-forecasting",
    featured: true,
    bgImage: bgFlightDemand,
  },
  {
    title: "Seat Allocation Recommender",
    description:
      "Recommender system for distributing seats to agencies based on historical performance and forecasted materialization.",
    tech: ["Python", "Data Viz", "Deep Learning"],
    github: "https://github.com/dirac89/recommender-model/tree/main",
    featured: true,
    bgImage: bgSeatAllocation,
  },
  {
    title: "Clustering for Route Segmentation",
    description:
      "Used unsupervised learning to cluster flight routes based on sales patterns.",
    tech: ["Python", "Data Viz"],
    featured: false,
  },
  {
    title: "API Forecast Integration",
    description:
      "Served forecasts via fast API for downstream airline tools.",
    tech: ["Python", "API"],
    featured: false,
  }
];

export default projects;
