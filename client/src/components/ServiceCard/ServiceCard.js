import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div, Card, CardHeader, CardBody, Paragraph } from 'basedesign-iswad';
import Image from 'next/image';

import styles from './ServiceCard.module.scss';

const ServiceCard = ({ src, title, text, ...props }) => {
  const language = useSelector((state) => state.language);

  return (
    <>
      <Card className={cx('w-px-300 pb2', language === 'fa' && 'text-rtl', styles.card)} {...props}>
        <CardHeader>
          <Div className={cx(styles.cardImg)}>
            <Image src={src} />
          </Div>
        </CardHeader>
        <CardBody className="px1 flex flex--gr--1 flex--dir--col flex--jc--between">
          <Div className={cx('mb1 px1', styles.cardTitle)}>{title}</Div>
          <Paragraph className={cx(styles.cardText)}>{text}</Paragraph>
        </CardBody>
      </Card>
    </>
  );
};

export default ServiceCard;
