import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div, MobNav, MobNavItem } from 'basedesign-iswad';

import styles from '../Header.module.scss';

const MobileNav = ({ activeMenu, mobMenuClickHandler, MENUES, mobMenuIsActive }) => {
  const language = useSelector((state) => state.language);

  return (
    <>
      <MobNav
        isActive={mobMenuIsActive}
        className={cx('flex--gr--1 w-per-100 bgInverse pl2 pr2 pt1 pb1 of-y-auto')}>
        {MENUES.map(
          (menu, idx1) =>
            menu.showInHeader === true && (
              <MobNavItem
                className={cx('flex flex--ai--center my1 py1 textBlack br-rad-px-5 w-per-100')}
                onClick={() => mobMenuClickHandler('')}
                isActive={activeMenu === ''}
                key={idx1}>
                <Div className="mouse-hand">{language === 'en' ? menu.en : menu.fa}</Div>
              </MobNavItem>
            )
        )}
      </MobNav>
    </>
  );
};

export default MobileNav;
