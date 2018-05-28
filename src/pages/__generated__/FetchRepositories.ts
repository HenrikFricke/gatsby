

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchRepositories
// ====================================================

export interface FetchRepositories_allGithubRepositories_edges_node {
  name: string | null;
}

export interface FetchRepositories_allGithubRepositories_edges {
  node: FetchRepositories_allGithubRepositories_edges_node | null;  // The item at the end of the edge
}

export interface FetchRepositories_allGithubRepositories {
  edges: (FetchRepositories_allGithubRepositories_edges | null)[] | null;  // A list of edges.
}

export interface FetchRepositories {
  allGithubRepositories: FetchRepositories_allGithubRepositories | null;  // Connection to all GithubRepositories nodes
}

//==============================================================
// START Enums and Input Objects
// All enums and input objects are included in every output file
// for now, but this will be changed soon.
// TODO: Link to issue to fix this.
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================