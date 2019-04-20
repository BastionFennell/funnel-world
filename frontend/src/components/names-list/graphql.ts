import gql from "graphql-tag";

export const NAMES_QUERY = gql`
  query NamesQuery($gender: String!) {
    names(gender: $gender, race: "human") {
      name
    }
  }
`;
