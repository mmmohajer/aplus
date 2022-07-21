import React, { useState } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div, DraggableSlider, DraggableSliderItem, Button } from 'basedesign-iswad';

import ServiceCard from 'Components/ServiceCard';

import { ITEMS } from './constants';
import styles from './Services.module.scss';

const Services = () => {
  const language = useSelector((state) => state.language);

  const [moveLeft, setMoveLeft] = useState(false);
  const [moveRight, setMoveRight] = useState(false);
  const [moveToItemWithNum, setMoveToItemWithNum] = useState(1);

  return (
    <>
      <Div type="flex" hAlign="center" className={cx('show-flex-in-md-lg')}>
        <Div className={cx(styles.container)}>
          {ITEMS.map((item, idx) => (
            <ServiceCard
              key={idx}
              src={item.src}
              title={language === 'en' ? item.titleEn : item.titleFa}
              text={language === 'en' ? item.textEn : item.textFa}
            />
          ))}
        </Div>
      </Div>

      <Div type="flex" hAlign="center" className={cx('pos-rel w-per-100 p4 show-flex-in-sm-xsm')}>
        <DraggableSlider
          moveLeft={moveLeft}
          setMoveLeft={setMoveLeft}
          moveRight={moveRight}
          setMoveRight={setMoveRight}
          moveToItemWithNum={moveToItemWithNum}
          setMoveToItemWithNum={setMoveToItemWithNum}
          initialTranslateX="0%"
          moveLeftTranslateX="33.33333%"
          moveRightTranslateX="-33.33333%"
          className={cx('flex flex--jc--center', styles.mobContainer)}>
          {ITEMS.map((item, idx) => (
            <DraggableSliderItem key={idx} className={cx('mx2', styles.mobCardItem)}>
              <ServiceCard
                src={item.src}
                title={language === 'en' ? item.titleEn : item.titleFa}
                text={language === 'en' ? item.textEn : item.textFa}
              />
            </DraggableSliderItem>
          ))}
        </DraggableSlider>
        {/* <Div className={cx(styles.carouselButton, styles.carouselButtonLeft)}>
          <Button onClick={() => setMoveLeft(true)}>Left</Button>
        </Div>
        <Div className={cx(styles.carouselButton, styles.carouselButtonRight)}>
          <Button onClick={() => setMoveRight(true)}>Right</Button>
        </Div> */}
      </Div>
    </>
  );
};

export default Services;
