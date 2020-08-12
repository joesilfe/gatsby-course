import styled from 'styled-components';
import media from 'styled-media-query';

export const SideBarContainer = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1200;
    width: 20rem;

    ${media.lessThan("large")`
        width: 100vw;
    `}
`;

export const SidebaWrapper = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;    
    height: 100vh;
    padding: 2rem;
    text-align: center;
    border-right: 1px solid var(--borders);
    background: var(--mediumBackground);

    ${media.lessThan("large")`
        border-bottom: 1px solid var(--borders);
        border-right: none;
        align-items: flex-start;
        height: auto;
        padding: 1rem 2rem;
        align-items: flex-start;
        display: flex;
    `}
`;