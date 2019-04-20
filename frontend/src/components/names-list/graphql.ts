import gql from "graphql-tag";

export const NAMES_QUERY = gql`
  query NamesQuery($gender: String!, $race: String!) {
    names(gender: $gender, race: $race) {
      name
    }
  }
`;
