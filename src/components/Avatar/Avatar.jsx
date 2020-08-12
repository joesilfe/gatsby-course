import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './avatarCss';


const Avatar = () => {
    // eq: "nome do arquibo que possuí na pasta do projeto images". subindo updated
    const {
        avatarImage: {
            childImageSharp: { fluid }
        }
    } = useStaticQuery(
        graphql`
            query{
                avatarImage: file(relativePath: { eq: "profile-jorel.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 60) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    );

    return <S.AvatarWrapper fluid={fluid} />
};

export default Avatar;