import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar/avatar';

import getThemeColor from '../../utils/getThemeColor';

import * as S from './profileCss';


const Profile = () => {

    const {
        site: {
            siteMetadata: { title, position, description } },
    } = useStaticQuery(graphql`
        query MySiteMetadata {
            site {
                siteMetadata {
                    title
                    position
                    description
                }
            }
        } `
    );

    return (
        <S.ProfileWrapper>
            <S.ProfileLink
                to="/about"
                cover
                direction="left"
                duration={0.6}
                bg={getThemeColor()}
            >
                <Avatar />
                <S.ProfileAuthor>
                    {title}
                    <S.ProfilePosition>{position}</S.ProfilePosition>
                </S.ProfileAuthor>
                <S.ProfileDescription>{description}</S.ProfileDescription>
            </S.ProfileLink>
        </S.ProfileWrapper>
    )
};

// Alterinativa
// const Profile = () => {
//     return (
//         <StaticQuery
//             query={graphql`
//                 query MySiteMetadata {
//                     site {
//                         siteMetadata {
//                             title
//                             position
//                             description
//                         }
//                     }
//                 }              
//             `}
//             render={({ site: { siteMetadata: { title, position, description } } }) => (
//                 <div className="Profile-Wrapper">
//                     <h1>{title}</h1>
//                     <h1>{position}</h1>
//                     <p>{description}</p>
//                 </div>
//             )}
//         />
//     );
// };

export default Profile;