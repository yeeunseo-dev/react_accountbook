import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Router from "./shared/Router";
import Layout from "./shared/Layout";

const App = () => {
  return (
    <div>
      <GlobalStyle>
        <Layout>
          <Router />
        </Layout>
      </GlobalStyle>
    </div>
  );
};

export default App;
