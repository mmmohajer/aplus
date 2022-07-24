import React, { useState } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div, Image, HamburgerIcon, Text } from 'basedesign-iswad';

import { LangToFarsi, langToEnglish } from 'Reducers/general/language';
import DesktopNav from './subs/DesktopNav';
import MobileNav from './subs/MobileNav';

import styles from './Header.module.scss';
import { HAMBURGER_CONFIG } from './constants';
import { MENU_ITEMS } from 'Constants/menuItems';

import Logo from 'Images/js-Images/general/Logo-Modified.png';

const MENUES = ['Home', 'About Us', 'Services', 'Contact Us'];
const SUB_MENUES = {
  'About Us': ['Team', 'Support', 'Careers'],
  Services: ['Software Development', 'App Development', 'MVP Development', 'Web Design']
};

const Header = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  const [activeSubMenues, setActiveSubMenues] = useState([]);
  const [activeMenu, setActiveMenu] = useState('Home');
  const [mobMenuIsActive, setMobMenuIsActive] = useState(false);
  const [iconToggler, setIconToggler] = useState(false);

  const addActiveSubMenu = (menu) => {
    setActiveSubMenues([menu]);
  };

  const removeActiveSubMenu = (menu) => {
    let localActiveSubMenues = [...activeSubMenues];
    localActiveSubMenues = localActiveSubMenues.filter((m) => m !== menu);
    setActiveSubMenues(localActiveSubMenues);
  };

  const menuClickHandler = (menu) => {
    setActiveSubMenues([]);
    if (Object.keys(SUB_MENUES).includes(menu)) {
      if (activeSubMenues.includes(menu)) {
        removeActiveSubMenu(menu);
      } else {
        addActiveSubMenu(menu);
      }
    } else {
      setActiveMenu(menu);
      setActiveSubMenues([]);
    }
  };

  const mobMenuClickHandler = (menu) => {
    menuClickHandler(menu);
    if (!Object.keys(SUB_MENUES).includes(menu)) {
      setIconToggler(true);
      setMobMenuIsActive(false);
    }
  };

  return (
    <>
      <Div
        type="flex"
        distributedBetween
        vAlign="center"
        className={cx('w-per-100 px3', styles.header)}>
        <Div>
          <Image src={Logo} width="200" height="80" alt="APlus Logo" />
        </Div>
        <Div type="flex" vAlign="center">
          <Div className="show-flex-in-lg">
            <DesktopNav
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              activeSubMenues={activeSubMenues}
              menuClickHandler={menuClickHandler}
              MENUES={MENU_ITEMS}
            />
          </Div>
          <Div type="flex" className="bgInverse pt1 pb1 pl1 pr1 br-rad-px-5">
            <Div
              className="pr1 mr1 mouse-hand br-right-solid-1"
              onClick={() => dispatch(langToEnglish())}>
              <Text>EN</Text>
            </Div>
            <Div className="mouse-hand" onClick={() => dispatch(LangToFarsi())}>
              <Text>FA</Text>
            </Div>
          </Div>
          <Div
            className={cx(
              'show-flex-in-md-sm-xsm',
              'w-per-100 flex flex--jc--between flex--ai--center pl2 pr2 pos-rel'
            )}>
            <Div className="z-100000">
              <HamburgerIcon
                cssConfig={HAMBURGER_CONFIG}
                onClick={() => setMobMenuIsActive(!mobMenuIsActive)}
                iconToggler={iconToggler}
                setIconToggler={setIconToggler}
              />
            </Div>
            <Div
              className={cx(
                'height-vh-full w-per-80 pos-fix pos-fix--rt flex flex--dir--col z-10000 iswad_mobNav',
                mobMenuIsActive && 'iswad_mobNav_active'
              )}>
              <Div className="height-px-80"></Div>
              <MobileNav
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                activeSubMenues={activeSubMenues}
                mobMenuClickHandler={mobMenuClickHandler}
                MENUES={MENU_ITEMS}
                mobMenuIsActive={mobMenuIsActive}
                setMobMenuIsActive={setMobMenuIsActive}
                iconToggler={iconToggler}
                setIconToggler={setIconToggler}
              />
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Header;
