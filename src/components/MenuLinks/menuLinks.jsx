import React from 'react';

import { links } from "../utils/content";

import getThemeColor from '../../utils/getThemeColor';

import * as S from './menuLinksCss';

const MenuLinks = () => {
    return (
        <S.MenuLinksWrapper>
            <S.MenuLinksList>
                { links.map((link, index) => {
                    return (
                        <S.MenuLinksItem key={index}>
                            <S.MenuLinksLink 
                                cover
                                direction="left"
                                duration={0.6}
                                bg={getThemeColor()}
                                to={link.url} 
                                title={link.label} 
                                activeClassName="active" rel="noopener noreferrer"
                            >
                                {link.label}
                            </ S.MenuLinksLink>
                        </S.MenuLinksItem>
                    )
                })}
            </S.MenuLinksList>
        </S.MenuLinksWrapper>

    );
};

export default MenuLinks;