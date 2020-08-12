import styled from 'styled-components';
import media from 'styled-media-query';

export const CommmentsWrapper = styled.section`
    margin: auto;
    max-width: 70rem;
    padding: 3rem 6.4rem 3rem;

    iframe[src*="ads-iframe"]{
        display:none;
    }

    #disqus_thread{
        a {
            color: var(--highlight) !important;
        }
    }

    ${media.lessThan("large")`
        max-width: 100%;
        padding: 3rem 1.4rem 0px;
    `}

`;

export const CommmentsTitle = styled.h2`
    color: var(--postColor);
    font-size: 2.1rem;
    font-weight: 700;
    padding-bottom: 2rem;
`;