import React from 'react';
import * as S from './swupdaterCss';
import { IconsDefault } from './../utils/Icons';

const SWUpdater = () => {
    return (
        <S.NotificationWrapper>
            <p>Tem uma atualização disponível.</p>
            <S.IconWrapper onClick={ () => window.location.reload()}>
                <IconsDefault.Refresh />
            </S.IconWrapper>
        </ S.NotificationWrapper >
    );
}

export default SWUpdater;