import React from 'react';
import Profile from '../Profile/profile';
import SocialLinks from '../SocialLinks/socialLinks';
import MenuLink from '../MenuLinks/menuLinks'

import * as S from './sidebarCss'

const Sidebar = () => {
    return (
        <S.SideBarContainer>
            <S.SidebaWrapper>
                <Profile />
                <SocialLinks />
                <MenuLink />
            </S.SidebaWrapper>
        </S.SideBarContainer>
    );
};

export default Sidebar;