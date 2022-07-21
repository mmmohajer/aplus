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
  const [moveRight, setMoveRight] = useState(false);
  const [moveToItemWithNum, setMoveToItemWithNum] = useState(1);

  return (
    <>
      <Div className={cx('mb5 h1 text-center', styles.sectionTitle)}>
        {language === 'en' ? 'Our Services' : 'خدمات ما'}
      </Div>
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
          moveRight={moveRight}
          setMoveRight={setMoveRight}
          moveToItemWithNum={moveToItemWithNum}
          setMoveToItemWithNum={setMoveToItemWithNum}
          className={cx(styles.mobContainer)}>
          {ITEMS.map((item, idx) => (
            <CarouselItem key={idx} className={cx(styles.mobCardItem)}>
              <ServiceCard
                src={item.src}
                title={language === 'en' ? item.titleEn : item.titleFa}
                text={language === 'en' ? item.textEn : item.textFa}
              />
            </CarouselItem>
          ))}
        </Carousel>
        <Div>
          <Button
            className={cx('mx2', styles.carouselButton, styles.carouselButtonLeft)}
            onClick={() => setMoveLeft(true)}>
            {'<'}
          </Button>
        </Div>
        <Div>
          <Button
            className={cx('mx2', styles.carouselButton, styles.carouselButtonRight)}
            onClick={() => setMoveRight(true)}>
            {'>'}
          </Button>
        </Div>
      </Div>
    </>
  );
};

export default Services;
