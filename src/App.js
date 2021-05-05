import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from 'components/Navbar'
import RouterApp from "router/index";
import Spinner from 'components/LoadingSpinner'

const App = () => {
  return (
    <Suspense fallback={<Spinner/>}>
      <Router>
      <Navbar/>
        <RouterApp />
      </Router>
    </Suspense>
  );
};

export default App;
