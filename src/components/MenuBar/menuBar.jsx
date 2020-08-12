import React, { useEffect, useState } from 'react';

import { IconsHome } from '../utils/Icons';

import getThemeColor from '../../utils/getThemeColor';

import * as S from './menuBarCss';

const MenuBar = () => {

    const [theme, setTheme] = useState(null)
    const [display, setDisplay] = useState(null)

    const isDarkMode = theme === 'dark'
    const isListMode = display === 'list'

    useEffect(() => {
        setTheme(window.__theme)
        setDisplay(window.__display)

        window.__onThemeChange = () => setTheme(window.__theme)
        window.__onDisplayChange = () => setDisplay(window.__display)
    }, [])

    return (
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                <S.MenuBarLink
                    cover
                    direction="right"
                    duration={0.6}
                    bg={getThemeColor()}
                    to="/"
                    title="Voltar para Home"
                >
                    <S.MenuBarItem>
                        <IconsHome.Home />
                    </S.MenuBarItem>
                </S.MenuBarLink>
                <S.MenuBarLink
                    cover
                    direction="left"
                    duration={0.6}
                    bg={getThemeColor()}
                    to="/search/"
                    title="Buscar"
                >
                    <S.MenuBarItem>
                        <IconsHome.Search />
                    </S.MenuBarItem>
                </S.MenuBarLink>
            </S.MenuBarGroup>
            <S.MenuBarGroup>
                <S.MenuBarItem
                    title="Mudar o Tema"
                    onClick={() => {
                        window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
                    }}
                    className={theme}
                >
                    {isDarkMode ? <IconsHome.BrightnessLow /> : <IconsHome.BrightnessHigh />}
                </S.MenuBarItem>
                <S.MenuBarItem
                    title="Visualização por Grid ou Lista"
                    onClick={() => {
                        window.__setPreferredDisplay(isListMode ? 'grid' : 'list');
                    }}
                >
                    {isListMode ? <IconsHome.Grid /> : <IconsHome.List />}

                </S.MenuBarItem>
                <S.MenuBarItem title="Ir para o topo"
                    onClick={() => {
                        window.scroll({ top: 0, behavior: 'smooth' })
                    }}
                >
                    <IconsHome.Arrow />
                </S.MenuBarItem>
            </S.MenuBarGroup>
        </ S.MenuBarWrapper>
    )
}

export default MenuBar;