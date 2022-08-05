import React, { useState } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div, Card, CardBody, CardHeader, Paragraph, Image } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';
import { COLORS } from '../../constants/vars';

import styles from './TestimonialCard.module.scss';

const TestimonialCard = ({ src, name, opinion, ...props }) => {
  const language = useSelector((state) => state.language);

  const [open, setOpen] = useState(false);

  return (
    <>
      <Div type="flex" className="pos-rel">
        {open && (
          <Div type="flex" vAlign="center" className={cx(styles.leftIcon)}>
            <Icon type="angleLeft" color={COLORS.faded} />
          </Div>
        )}
        <Card
          className={cx(
            'w-px-600 pb2 pl2 pr2 pt2 mx3 br-rad-px-5 bgInverse',
            language === 'fa' && 'text-rtl',
            styles.card
          )}
          onMouseOver={() => setOpen(true)}
          onMouseOut={() => setOpen(false)}
          {...props}>
          <CardHeader>
            <Div className="height-px-30">
              <Icon type="quoteLeft" color={COLORS.faded} />
            </Div>
          </CardHeader>
          <CardBody className="">
            <Paragraph className={cx('f-i px3')}>{opinion}</Paragraph>
            <Div className={cx('f-b')}>{language === 'en' ? '- ' + name : name + ' -'}</Div>
          </CardBody>
        </Card>
        {open && (
          <Div type="flex" vAlign="center" className={cx(styles.rightIcon)}>
            <Icon type="angleRight" color={COLORS.faded} />
          </Div>
        )}
      </Div>
    </>
  );
};

export default TestimonialCard;
