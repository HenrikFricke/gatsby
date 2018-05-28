import * as React from "react";

export interface Props {
  repositories: string[];
}

export const Repositories = ({ repositories }: Props) => (
  <div>
    <h2>Repositories</h2>
    <ul>
      {repositories.map(repository => <li key={repository}>{repository}</li>)}
    </ul>
  </div>
);
