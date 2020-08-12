import React from "react";

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>404</h1>
      <p>Ops.... Parece que você está tentando acessar uma págian que não existe.</p>
    </Layout>
  );
};


export default NotFoundPage;
