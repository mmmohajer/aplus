import React, { useState } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div, SwipableSlider, SwipableSliderItem } from 'basedesign-iswad';

import TestimonialCard from 'Components/TestimonialCard';

import styles from './Testimonials.module.scss';
import { TESTIMONIALS } from './constants';

const Testimonials = () => {
  const language = useSelector((state) => state.language);

  const [moveLeft, setMoveLeft] = useState(false);
  const [moveRight, setMoveRight] = useState(false);
  const [moveToItemWithNum, setMoveToItemWithNum] = useState(1);

  return (
    <>
      <Div id="Testimonial">
        <Div className={cx('text-center h1 my3')}>
          {language === 'en' ? 'Read what our customers say' : 'مشتریان ما درباره ما چه می‌گویند؟'}
        </Div>
        <Div type="flex" hAlign="center" className={cx('pos-rel w-per-100')}>
          <SwipableSlider
            moveLeft={moveLeft}
            setMoveLeft={setMoveLeft}
            moveRight={moveRight}
            setMoveRight={setMoveRight}
            moveToItemWithNum={moveToItemWithNum}
            setMoveToItemWithNum={setMoveToItemWithNum}
            initialTranslateX="0%"
            moveLeftTranslateX="33.33333%"
            moveRightTranslateX="-33.33333%"
            minXDifferenceToMove={10}
            notScrollableOnSwipableElement={false}
            transitionDuration={0.3}
            className={cx('flex flex--jc--center')}>
            {TESTIMONIALS.map((item, idx) => (
              <SwipableSliderItem key={idx} className={cx('mx2 mb5')}>
                <TestimonialCard
                  key={idx}
                  src={item.src}
                  name={language === 'en' ? item.nameEn : item.nameFa}
                  opinion={language === 'en' ? item.opinionEn : item.opinionFa}
                />
              </SwipableSliderItem>
            ))}
          </SwipableSlider>
        </Div>
      </Div>
    </>
  );
};

export default Testimonials;
