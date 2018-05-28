import * as React from "react";

import Link from "gatsby-link";

import { Repositories } from "../components/repositories";
import { FetchRepositories } from "./__generated__/FetchRepositories";

export interface Props {
  data: FetchRepositories;
}

const IndexPage = ({ data }: Props) => {
  const repositories = data.allGithubRepositories.edges.map(
    edge => edge.node.name
  );

  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <Repositories repositories={repositories} />
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query FetchRepositories {
    allGithubRepositories {
      edges {
        node {
          name
        }
      }
    }
  }
`;
