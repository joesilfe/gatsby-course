import React from 'react';
import propTypes from 'prop-types';
import AniLink from "gatsby-plugin-transition-link/AniLink";

import getThemeColor from '../../utils/getThemeColor';

import * as S from './paginationCss';

const Pagination = ({ isFirts, isLast, currentPage, numPages, prevPage, nextPage }) => {

    return (
        <S.PaginationWrapper>
            {!isFirts &&
                <AniLink
                    cover
                    direction="right"
                    duration={0.6}
                    bg={getThemeColor()}
                    to={prevPage}
                >
                    ← pagina anterior
                </AniLink>
            }
            <p>
                {currentPage} de {numPages}
            </p>
            {!isLast &&
                <AniLink
                    cover
                    direction="left"
                    duration={0.6}
                    bg={getThemeColor()}
                    to={nextPage}
                >
                    próxima página →
                </AniLink>
            }
        </S.PaginationWrapper>
    );
}

// Tipando valores que recebe via props
Pagination.propTypes = {
    isFirts: propTypes.bool.isRequired,
    isLast: propTypes.bool.isRequired,
    currentPage: propTypes.number.isRequired,
    numPages: propTypes.number.isRequired,
    prevPage: propTypes.string,
    nextPage: propTypes.string,
}

export default Pagination;