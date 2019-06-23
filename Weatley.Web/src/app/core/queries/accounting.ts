import gql from 'graphql-tag';

export const get = gql`
  query accountings {
    accountings {
      id
      date
      paid
      finalPrice
      paymentType
      customer {
        name
        surname
      }
    }
  }
`;

export const getById = gql`
  query accounting($id: ID!) {
    accounting(id: $id) {
      id
      date
      paid
      finalPrice
      paymentType
      customer {
        email
        name
        surname
      }
    }
  }
`;

export const update = gql`
  mutation updateAccounting($id: ID!, $data: AccountingUpdateInput!) {
    updateAccounting(id: $id, data: $data) {
      id
      date
      finalPrice
      paid
      paymentType
      customer {
        name
        surname
      }
    }
  }
`;

export const create = gql`
  mutation createAccounting($data: AccountingCreateInput!) {
    createAccounting(data: $data) {
      id
      date
      finalPrice
      paid
      paymentType
      customer {
        email
        name
        surname
      }
    }
  }
`;

export const deleteQuery = gql`
  mutation deleteAccounting($id: ID!) {
    deleteAccounting(id: $id) {
      id
    }
  }
`;
