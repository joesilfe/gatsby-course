/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 * https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
 * https://www.gatsbyjs.org/packages/gatsby-source-filesystem/?=files
 * 
 */

// You can delete this file if you're not using it
const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`);

// Serve para adicionar o campo(url) slug para cada um dos Post.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Verifica se defato o arquivo que foi lido é markedownRemark
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const relativeFilePathSlug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    });

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${relativeFilePathSlug.slice(12)}`,
    });
  };
};

// Configuração para cria páginas
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    query createPages {
      allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              background
              category
              description
              title
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              image
            }
            timeToRead
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }    
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blog-post.jsx'),
        context: {
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous
        },
      });
    });
    
    // Configurando e criando a paginação

    // Limite de conteúdo por página = 6
    const postsPerPage = 6;
    // Pega o tamanho do Array e divide por 6. Caso der valor quebrado é arredondado.
    const numPages = Math.ceil(posts.length / postsPerPage); 

    // Cria um novo array com o númer de página através da lógica a cima.
    Array.from({ length: numPages }).forEach((_, index) => {
      // Configura uma nova página para possuir paginação.
      createPage({
        path: index === 0 ? `/` : `/page/${index + 1}`,
        component: path.resolve('./src/templates/blog-list.jsx'),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      });
    });
  });
};