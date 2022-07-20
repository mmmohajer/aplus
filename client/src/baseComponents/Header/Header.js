import React from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div, Image, Text } from 'basedesign-iswad';

import { LangToFarsi, langToEnglish } from 'Reducers/general/language';

import styles from './Header.module.scss';

import Logo from 'Images/js-Images/general/Logo-Modified.png';
import CaFlag from 'Images/js-Images/general/icons8-canada-48.png';
import IrFlag from 'Images/js-Images/general/icons8-iran-48.png';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <Div type="flex" distributedBetween vAlign="center" className="w-per-100 p2 header">
      <Div>
        <Image src={Logo} width="200" height="80" alt="APlus Logo" />
      </Div>
      <Div type="flex">
        <Div
          className="pr1 mr1 mouse-hand br-right-solid-1"
          onClick={() => dispatch(langToEnglish())}>
          {/* <Image src={CaFlag} alt="APlus Logo" width="36" height="36" /> */}
          <Text>EN</Text>
        </Div>
        <Div className="mouse-hand" onClick={() => dispatch(LangToFarsi())}>
          {/* <Image src={IrFlag} alt="APlus Logo" width="36" height="36" /> */}
          <Text>FA</Text>
        </Div>
      </Div>
    </Div>
  );
};

export default Header;
