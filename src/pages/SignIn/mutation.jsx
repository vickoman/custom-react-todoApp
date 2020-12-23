import gql from "graphql-tag";

export const loginUser = gql`
  mutation($UserLoginInput: UserLoginInput!) {
    login(
      UserLoginInput: $UserLoginInput
    ) {
      token
      username
      firstName
      lastName
    }
  }
`;

