import gql from 'graphql-tag';

export const get = gql`
  query customers {
    customers {
      id
      name
      surname
      email
    }
  }
`;
