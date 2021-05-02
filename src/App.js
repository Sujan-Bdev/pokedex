import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import RouterApp from "router/index";

const App = () => {
  return (
    <Suspense fallback={<h2>Loading!!!</h2>}>
      <Router>
        <RouterApp />
      </Router>
    </Suspense>
  );
};

export default App;
