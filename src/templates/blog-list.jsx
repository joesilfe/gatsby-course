import React from 'react';
import { graphql } from 'gatsby';

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import PostItem from '../components/PostItem/postItem';
import Pagination from '../components/Pagination/pagination'

import * as S from '../components/ListWrapper/listWrapperCss'


const BlogList = props => {
    const postList = props.data.allMarkdownRemark.edges

    const { currentPage, numPages } = props.pageContext;
    const isFirts = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? `/` : `/page/${currentPage - 1}`
    const nextPage = `/page/${currentPage + 1}`

    return (
        <Layout>
            <SEO title="Home" />
            <S.ListWrapper>
            {postList.map(({
                node: {
                    frontmatter: { background, category, date, description, title },
                    timeToRead,
                    fields: { slug }
                },
            }, index) => {
                return (
                    <PostItem
                        key={index}
                        slug={slug}
                        background={background}
                        category={category}
                        date={date}
                        timeToRead={timeToRead}
                        title={title}
                        description={description}
                    />
                )
            })}
            </S.ListWrapper>
            <Pagination
                isFirts={isFirts}
                isLast={isLast}
                currentPage={currentPage}
                numPages={numPages}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Layout>
    );
}

export const query = graphql`
    query PostList($limit: Int!, $skip: Int!) {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: $limit, skip: $skip) {
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
                }
                timeToRead
                }
            }
        }
    }
`;

export default BlogList;