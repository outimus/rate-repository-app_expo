import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
            id
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
`;
export const SINGLE_REPO_VIEW = gql`
 query ($id: ID!) {
  repository(id: $id) {
    id
    fullName
    url
    language
    stargazersCount
    forksCount
    ratingAverage
    reviewCount
    ownerAvatarUrl
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`;