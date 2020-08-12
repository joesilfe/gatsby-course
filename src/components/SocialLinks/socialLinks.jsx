import React from 'react';

import { IconsSocial } from '../utils/Icons';
import { social } from '../utils/content';

import * as S from './socialLinksCss';

const SocialLinks = () => {

    // noopener noreferrer: É importante para SEO não identificar que está jogando links sem nenhuma referência;
    return (
        <S.SocialLinksWrapper>
            <S.SocialLinksList>
                {social.map((social, index) => {
                    const Icon = IconsSocial[social.label];
                    return (
                        <S.SocialLinksItem key={index}>
                            <S.SocialLinksLink href={social.url} title={social.label} target="_blank" rel="noopener noreferrer">
                                <S.IconWrapper>
                                    <Icon />
                                </S.IconWrapper>
                            </S.SocialLinksLink>
                        </S.SocialLinksItem>
                    )
                })}
            </S.SocialLinksList>
        </S.SocialLinksWrapper>
    );
};

export default SocialLinks;