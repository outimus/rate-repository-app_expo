import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
mutation Authenticate($username: String!, $password: String!){
  authenticate(credentials: {username: $username, password: $password }) {
    accessToken
    user {
      username
      }
    }
}`;

export const CREATE_REVIEW = gql`
mutation CreateReviewInput($ownerName: String!, $repositoryName: String!, $rating: Int!, $text: String) {
  createReview (review: { ownerName: $ownerName, repositoryName: $repositoryName, rating: $rating, text: $text } ){
    rating
    repository {
      fullName
    }
    user {
      username
      reviews {
        edges {
          node {
            text
          }
        }
      }
    }
  }
}`;