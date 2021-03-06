import * as React from "react";

import Helmet from "react-helmet";

import { Header } from "../components/header";
import { SiteTitleQuery } from "./__generated__/SiteTitleQuery";

import "./index.css";

export interface Props {
  data: SiteTitleQuery;
  children: () => null;
}

const Layout = ({ children, data }: Props) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
