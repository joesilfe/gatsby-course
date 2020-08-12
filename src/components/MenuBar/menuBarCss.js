import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const MenuBarWrapper = styled.aside`
    align-items: center;
    background: var(--mediumBackground);
    border-left: 1px solid var(--borders);
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    /* padding: 0.5rem 0; */
    position: fixed;
    right: 0;
    width: 3.75rem;

    ${media.lessThan("large")`
        flex-direction: row;
        width: 100%;
        height: 4rem;
        bottom: 0;        
        z-index: 5;
        border-left: none;
        border-top: 1px solid var(--borders);
    `}
`;

export const MenuBarGroup = styled.div`
    display:flex;
    flex-direction: column;

    ${media.lessThan("large")`
        flex-direction: row;
    `}
`;

export const MenuBarLink = styled(AniLink)`
    display: block;
`;

export const MenuBarItem = styled.span`
    color: var(--texts);
    cursor: pointer;
    display: block;
    padding: 1.1rem;
    position: relative;
    width: 30px;
    height: 30px;    
    transition: color 0.5s;

    &.light{
        color: #ff7f50;

        &:hover {
            color: #ff7f50;
        }
    }

    &:hover{
        color: var(--highlight);
    }
    

    ${media.lessThan("large")`
        &:nth-child(2) {
            display:none;
        }
    `}
`;