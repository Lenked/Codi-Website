import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import CodiboldthemescombyhtmltodesignFREEversionFifteen from "pages/CodiboldthemescombyhtmltodesignFREEversionFifteen";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "codiboldthemescombyhtmltodesignfreeversionfifteen",
      element: <CodiboldthemescombyhtmltodesignFREEversionFifteen />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
