import { CategoriesList, Quiz, ScoreBoard } from "../../components";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const DashboardContent = () => {
  const path = useLocation();

  useEffect(() => {
    fetchContent();
    // eslint-disable-next-line
  }, [path.pathname]);
  const fetchContent = () => {
    switch (path.pathname) {
      case "/":
        return <CategoriesList />;
      case "/quiz/HTML":
        return <Quiz />;
      case "/quiz/CSS":
        return <Quiz />;
      case "/quiz/JS":
        return <Quiz />;
      case "/score":
        return <ScoreBoard />;
      default:
        return <CategoriesList />;
    }
  };

  return <>{fetchContent()}</>;
};
