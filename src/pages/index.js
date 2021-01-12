import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import HeroHeader from "../components/heroHeader";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        "&:hover": {
          backgroundColor: "rgba(171, 171, 171, 0.15)",
          // backgroundColor: "#f2f2f3",
        },
      },
    },
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "rgba(171, 171, 171, 0.15)",
          // backgroundColor: "#f2f2f3",
        },
      },
    },
  },
});

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Helmet>
          <title>{site.siteMetadata.title}</title>
          <meta name="description" content={site.siteMetadata.description} />
          <meta
            name="keywords"
            content="blog, university, computer science, ideas, korea, student, developer, design, stony brook, suny korea, janar, osmonaliev"
          ></meta>
          <meta content={site.siteMetadata.viewport} name="viewport"></meta>
          <meta name="image" content={site.siteMetadata.image}></meta>

          <html lang="en" />
        </Helmet>
        <HeroHeader />
        <h2>Blog Posts &darr;</h2>
        <div className="grids">{Posts}</div>
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
        viewport
        image
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            flair
          }
        }
      }
    }
  }
`;
