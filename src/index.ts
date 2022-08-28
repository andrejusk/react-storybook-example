import React from "react";

import { Page } from "./components/Page";

if (typeof document !== "undefined") {
  const app = React.createElement(Page);
  const { /* hydrateRoot, */ createRoot } = require("react-dom/client");
  const el = document.getElementById("root");
  // hydrateRoot(el, app);
  const root = createRoot(el);
  root.render(app);

  if (module.hot) module.hot.accept();
}
