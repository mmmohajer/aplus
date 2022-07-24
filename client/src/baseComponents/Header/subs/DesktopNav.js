import React from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { NavBar, NavItem } from 'basedesign-iswad';

import { setActiveMenu } from 'Reducers/general/activeMenu';

import styles from '../Header.module.scss';

const DesktopNav = ({ MENUES }) => {
  const dispatch = useDispatch();

  const language = useSelector((state) => state.language);
  const activeMenu = useSelector((state) => state.activeMenu);

  return (
    <>
      <NavBar className={cx('pos-rel w-per-100 flex flex--jc--between flex--ai--center px2')}>
        <div className="flex flex--jc--start flex--ai--center">
          <div className="flex">
            {MENUES.map(
              (menu, idx1) =>
                menu.showInHeader === true && (
                  <NavItem
                    className={cx(
                      'mx1 px1 flex flex--ai--center textBlack br-rad-px-5  br-color-primary'
                    )}
                    onClick={() => {
                      dispatch(setActiveMenu(menu.en));
                      document?.querySelector(`#${menu.en}`).scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                    isActive={activeMenu === menu.en}
                    key={idx1}>
                    <div className="mouse-hand pb1 pt1">
                      {language === 'en' ? menu.en : menu.fa}
                    </div>
                  </NavItem>
                )
            )}
          </div>
        </div>
      </NavBar>
    </>
  );
};

export default DesktopNav;

{
  /* <NavBar>
{MENU_ITEMS.map(
  (item, idx) =>
    item.showInHeader === true && (
      <NavItem key={idx} className={cx('mx2 br-rad-px-5 pl2 pr2 pb1 pt1 mouse-hand')}>
        {language === 'en' ? item.en : item.fa}
      </NavItem>
    )
)}
</NavBar> */
}
