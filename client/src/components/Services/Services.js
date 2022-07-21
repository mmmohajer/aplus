import React, { useState } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div, Carousel, CarouselItem, Button } from 'basedesign-iswad';

import ServiceCard from 'Components/ServiceCard';

import { ITEMS } from './constants';
import styles from './Services.module.scss';

const Services = () => {
  const language = useSelector((state) => state.language);

  const [moveLeft, setMoveLeft] = useState(false);
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
        <Carousel
          moveLeft={moveLeft}
          setMoveLeft={setMoveLeft}
          moveToItemWithNum={moveToItemWithNum}
          setMoveToItemWithNum={setMoveToItemWithNum}
          className={cx(styles.mobContainer)}>
          {ITEMS.map((item, idx) => (
            <CarouselItem key={idx} className={cx('w-per-100 mx1')}>
              <ServiceCard
                src={item.src}
                title={language === 'en' ? item.titleEn : item.titleFa}
                text={language === 'en' ? item.textEn : item.textFa}
              />
            </CarouselItem>
          ))}

          <Div className={cx(styles.carouselButton, styles.carouselButtonLeft)}>
            <Button onClick={() => setMoveLeft(true)}>Left</Button>
          </Div>
          <Div className={cx(styles.carouselButton, styles.carouselButtonRight)}>
            <Button onClick={() => setMoveToItemWithNum(4)}>Jump To number 4</Button>
          </Div>
        </Carousel>
      </Div>
    </>
  );
};

export default Services;
