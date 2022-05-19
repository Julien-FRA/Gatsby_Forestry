import { graphql, useStaticQuery } from 'gatsby';

export default function useHomeData() {
  const data = useStaticQuery(graphql`
    query getHomeData {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            id
            frontmatter {
              bg_image {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              title_content
              text_content
            }
            excerpt(pruneLength: 200)
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  console.log(data);
  return data.allMarkdownRemark.edges;
}
