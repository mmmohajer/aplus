import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div, Card, CardHeader, CardBody, Image, Paragraph } from 'basedesign-iswad';

import styles from './ServiceCard.module.scss';

const ServiceCard = ({ src, title, text, ...props }) => {
  const language = useSelector((state) => state.language);

  return (
    <>
      <Card className={cx('w-px-300 pb2', language === 'fa' && 'text-rtl', styles.card)} {...props}>
        <CardHeader>
          <Div>
            <Image src={src} />
          </Div>
        </CardHeader>
        <CardBody className="px1">
          <Div className={cx('mb1', styles.cardTitle)}>{title}</Div>
          <Paragraph className={cx(styles.cardText)}>{text}</Paragraph>
        </CardBody>
      </Card>
    </>
  );
};

export default ServiceCard;
