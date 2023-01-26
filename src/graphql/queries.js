import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
            description
            fullName
            language
            ratingAverage
            reviewCount
            ownerAvatarUrl
        }
      }
    }
  }
`;

export const AUTHENTICATED_USER = gql`
  query {
    me {
      id
      username
    }
  }
`