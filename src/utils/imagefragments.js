
import { graphql } from 'gatsby';

export const imageFragment = graphql`
fragment imageFragment on File {
      childImageSharp {
        sizes(maxHeight: 800) {
          ...GatsbyImageSharpSizes
        }
      }
}
`;

export const imageFragmentGame = graphql`
fragment imageFragmentGame on File {
      childImageSharp {
        sizes(maxWidth: 300) {
          ...GatsbyImageSharpSizes
        }
      }
}
`;

export const imageFragmentIcon = graphql`
fragment imageFragmentIcon on File {
      childImageSharp {
        sizes(maxWidth: 80) {
          ...GatsbyImageSharpSizes
        }
      }
}
`;


// export const gamesFragment = graphql`
// fragment portfolioFragment on File {
//       childImageSharp {
//         sizes(maxWidth: 1000) {
//           ...GatsbyImageSharpSizes
//         }
//       }
// }
// `;