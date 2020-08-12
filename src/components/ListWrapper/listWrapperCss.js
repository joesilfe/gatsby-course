import styled from 'styled-components';

export const ListWrapper = styled.section`
    body#grid & {
        background-color: var(--borders);
        border-bottom: 1px solid var(--borders);
        display: grid;
        grid-area: posts;
        grid-gap: 1px;
        /* auto-fit : Preencha tudo respeitando o minimo e maximo */
        grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    }
`;